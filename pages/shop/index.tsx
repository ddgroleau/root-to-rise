import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/Shop.module.scss';
import { getAllProducts, getDistinctIngredientNames, getDistinctPropertyNames, getDistinctTraitNames } 
    from '../../services/react-query/api.service';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import ShopFilters from '../../components/shop-filters/ShopFilters';
import { ProductCard } from '../../components/product-card/ProductCard';
import ProductDto from '../../dto/ProductDto';
import FilterItem from '../../models/FilterItem';
import Image from 'next/image';
import SortParams from '../../models/SortParams';
import SearchService from '../../services/search.service';

const Shop: NextPage = () => {
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductDto[]>([]);
    const [isAnimated,setIsAnimated] = useState<boolean>(true);
    const [isFilterError,setIsFilterError] = useState<boolean>(false);

    const { isLoading:isGettingProducts,   isSuccess:isProductSuccess, data: productData } 
        = useQuery("allProducts", getAllProducts );
    const { isLoading:isGettingIngredients,isSuccess:isIngredientSuccess, data: ingredientData } 
        = useQuery("allIngredients", getDistinctIngredientNames );
    const { isLoading:isGettingProperties, isSuccess:isPropertySuccess, data: propertyData } 
        = useQuery("allProperties", getDistinctPropertyNames );
    const { isLoading:isGettingTraits,     isSuccess:isTraitSuccess, data: traitData } 
        = useQuery("allTraits", getDistinctTraitNames );
    const [ingredients, setIngredients] 
        = useState<FilterItem<string>>({elements:[],references:[]});
    const [properties, setProperties]  
        = useState<FilterItem<string>>({elements:[],references:[]});
    const [traits, setTraits] 
        = useState<FilterItem<string>>({elements:[],references:[]});

    const sortParams = [
        { param:SortParams.PRICE_LOW_TO_HIGH, ref:useRef() as RefObject<HTMLInputElement> },
        { param:SortParams.PRICE_HIGH_TO_LOW, ref:useRef() as RefObject<HTMLInputElement> },
        { param:SortParams.NAME_A_Z,          ref:useRef() as RefObject<HTMLInputElement> },
        { param:SortParams.NAME_Z_A,          ref:useRef() as RefObject<HTMLInputElement> },
    ]; 
    
    useEffect(()=> {
        const setItemState = (stateSetter:any,itemData:any) => stateSetter({
            // Replacing special characters to circumvent Demo text
            elements:itemData.data,
            references:itemData.data.map(() => createRef())
        });
        if(isProductSuccess) {
            setProducts(productData.data);
            setFilteredProducts(productData.data);
        }
        if(isIngredientSuccess) setItemState(setIngredients,ingredientData);
        if(isPropertySuccess) setItemState(setProperties,propertyData);
        if(isTraitSuccess) setItemState(setTraits,traitData);
    },[productData,ingredientData,propertyData,traitData]);

    const clearFilters = ()=> {
        const clearItemReferences = (references:RefObject<HTMLInputElement>[]) => 
            references.forEach(item => {
                if(item.current) item.current.checked = false;
            });
        clearItemReferences(ingredients.references);
        clearItemReferences(properties.references);
        clearItemReferences(traits.references);
        clearItemReferences(sortParams.map(param=>param.ref));
        
        setIsAnimated(true);
        setFilteredProducts(products);
    };

    
    const applyFilters = () => {
        let selectedSortParam = sortParams.filter(item=>item.ref.current?.checked);
        const searchService = new SearchService(traits,properties,ingredients);
        
        if(searchService.noFiltersSelected(selectedSortParam))
            return setIsFilterError(true);

        let filteredProducts = searchService.getFilteredProducts(products);
            
        if(filteredProducts.length < 1 && selectedSortParam.length > 0)
            filteredProducts = products;
            
        setIsAnimated(true);
        return searchService.sortProducts(selectedSortParam,filteredProducts,setFilteredProducts);
    };

    return (
        <Layout 
            metaDescription="All natural tinctures, salves and herbal remedies" 
            pageTitle="Shop | Root to Rise Botanicals">
            <section className={styles.pageContainer}>
                <ShopFilters 
                    onApplyFilters={applyFilters}
                    onClearFilters={clearFilters}
                    ingredients={ingredients}    
                    properties={properties}    
                    traits={traits}
                    filterError={{isFilterError:isFilterError,setIsFilterError:setIsFilterError}}
                    sortParams={sortParams}
                />
                <div
                    className={`${styles.productsContainer} ${isAnimated ? styles.fadeIn : undefined}`} 
                    onAnimationEnd={()=>setIsAnimated(false)}> 
                    {filteredProducts.length < 1 ?
                        <div className={styles.noProducts}>
                            <p>Sorry, no products found.</p>
                            <Image height={300} width={200} src="/flower-illustration.svg" alt="plants illustration"/>
                        </div>  :
                        filteredProducts.map(product => {
                            return (
                                <div className={styles.cardContainer} key={product.productId}>
                                    <ProductCard product={product} />
                                </div>);
                        })}
                </div>
            </section>
        </Layout>
    );
};

export default Shop;

