import axios, { AxiosResponse } from "axios";
import ProductDto from "../../dto/ProductDto";

const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URI;

const getAllProducts = (): Promise<AxiosResponse> => {
    return axios.get<ProductDto[]>(`${API_BASE_URI}/products/all`).catch(error => error.data);
};

export default getAllProducts;
