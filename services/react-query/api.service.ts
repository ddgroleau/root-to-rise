import axios, { AxiosResponse } from "axios";
import ProductDto from "../../dto/ProductDto";
import ConfigService, { ConfigVars } from "../config.service";

export const getAllProducts = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/products/all";
    return await axios.get<ProductDto[]>(endpoint).catch(error => error.data);
};

export const getDistinctIngredientNames = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/ingredients/names/distinct";
    return await axios.get<string[]>(endpoint).catch(error => error.data);
};

export const getDistinctPropertyNames = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/properties/names/distinct";
    return await axios.get<string[]>(endpoint).catch(error => error.data);
};

export const getDistinctTraitNames = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/traits/names/distinct";
    return await axios.get<string[]>(endpoint).catch(error => error.data);
};

export const getProductById = async (productId:string): Promise<AxiosResponse|undefined> => {
    if(!productId) return;
    let endpoint = ConfigService.getVariable(ConfigVars.API) + `/products/${productId}`;
    return await axios.get<ProductDto>(endpoint).catch(error => error.data);
};

