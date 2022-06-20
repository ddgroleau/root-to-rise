import axios, { AxiosResponse } from "axios";
import ProductDto from "../../dto/ProductDto";

const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URI;

const getAllProducts = async (): Promise<AxiosResponse> => {
    let endpoint = API_BASE_URI + "/products/all";
    return await axios.get<ProductDto[]>(endpoint).catch(error => error.data);
};

export default getAllProducts;
