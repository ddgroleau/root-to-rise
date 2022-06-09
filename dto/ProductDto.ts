import IngredientDto from "./IngredientDto";
import PropertyDto from "./PropertyDto";
import TraitDto from "./TraitDto";

export default class ProductDto {
    public productId : number = 0;
    public name: string = '';
    public type: string = '';
    public valueProposition : string = '';
    public description: string = '';
    public price: number = 0;
    public stockQuantity: number = 0;
    public measurementSize: number = 0;
    public measurementUnit: string = '';
    public useCases: string = '';
    public instructions: string = '';
    public disclaimer: string = '';
    public imagePath: string = '';
    public ingredients: IngredientDto[] = [];
    public properties: PropertyDto[] = [];
    public traits: TraitDto[] = [];
}