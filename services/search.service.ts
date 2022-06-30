import { SetStateAction } from "react";
import IngredientDto from "../dto/IngredientDto";
import ProductDto from "../dto/ProductDto";
import PropertyDto from "../dto/PropertyDto";
import TraitDto from "../dto/TraitDto";
import FilterItem from "../models/FilterItem";
import SortParams from "../models/SortParams";

export default class SearchService {
    private filteredIngredients:IngredientDto[];
    private filteredProperties:PropertyDto[];
    private filteredTraits:TraitDto[];

    constructor(
        traits:FilterItem<TraitDto>, 
        properties:FilterItem<PropertyDto>, 
        ingredients:FilterItem<IngredientDto>
    ) {
        this.filteredIngredients = this.getFilteredObjects(ingredients);
        this.filteredProperties = this.getFilteredObjects(properties);
        this.filteredTraits = this.getFilteredObjects(traits);
    }

    public sortProducts(
        selectedSortParam:{param:SortParams}[], 
        products:ProductDto[], 
        stateSetter:SetStateAction<any>) 
        : void {
        if(selectedSortParam.length < 1) return stateSetter(products);
        if(selectedSortParam[0].param === SortParams.NAME_A_Z)
            return stateSetter(products.sort((a,b)=>a.name > b.name ? 1 : -1));
        if(selectedSortParam[0].param === SortParams.NAME_Z_A)
            return stateSetter(products.sort((a,b)=>a.name > b.name ? -1 : 1));
        if(selectedSortParam[0].param === SortParams.PRICE_HIGH_TO_LOW)
            return stateSetter(products.sort((a,b)=>b.price - a.price));
        if(selectedSortParam[0].param === SortParams.PRICE_LOW_TO_HIGH)
            return stateSetter(products.sort((a,b)=>a.price - b.price));
    };

    public getFilteredObjects(object:FilterItem<any>):any[] {
        return object.elements
            .filter(item => {
                let index = object.elements.indexOf(item);
                return object.references[index].current?.checked;
            });
    }

    public noFiltersSelected(sortParams:any[]) {
        const filterItems = [this.filteredIngredients,this.filteredProperties,this.filteredTraits,sortParams];
        return filterItems.every(array => array.length < 1);
    }

    public getFilteredProducts(products:ProductDto[]) : ProductDto[] {
        return products.filter(product => {
            return (
                (
                    (this.filteredIngredients.every(
                        ingredient => product.ingredients.map(item=>item.name).includes(ingredient.name)))
                    || this.filteredIngredients.length < 1 
                ) &&
                (
                    (this.filteredProperties.every(
                        property => product.properties.map(item=>item.name).includes(property.name)))
                    || this.filteredProperties.length < 1 
                ) &&
                (
                    (this.filteredTraits.every(
                        trait => product.traits.map(item=>item.name).includes(trait.name)))
                    || this.filteredTraits.length < 1
                )
            );
        });
    }

}