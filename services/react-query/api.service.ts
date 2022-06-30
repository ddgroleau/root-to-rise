import axios, { AxiosResponse } from "axios";
import IngredientDto from "../../dto/IngredientDto";
import ProductDto from "../../dto/ProductDto";
import PropertyDto from "../../dto/PropertyDto";
import TraitDto from "../../dto/TraitDto";
import ConfigService, { ConfigVars } from "../config.service";

export const getAllProducts = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/products/all";
    return await axios.get<ProductDto[]>(endpoint).catch(error => error.data);
};

export const getAllIngredients = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/ingredients/all";
    return await axios.get<IngredientDto[]>(endpoint).catch(error => error.data);
};

export const getAllProperties = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/properties/all";
    return await axios.get<PropertyDto[]>(endpoint).catch(error => error.data);
};

export const getAllTraits = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/traits/all";
    return await axios.get<TraitDto[]>(endpoint).catch(error => error.data);
};

