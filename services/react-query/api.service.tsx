import axios, { AxiosResponse } from "axios";
import ProductDto from "../../dto/ProductDto";
import ConfigService, { ConfigVars } from "../config.service";

const getAllProducts = async (): Promise<AxiosResponse> => {
    let endpoint = ConfigService.getVariable(ConfigVars.API) + "/products/all";
    return await axios.get<ProductDto[]>(endpoint).catch(error => error.data);
};

export default getAllProducts;
