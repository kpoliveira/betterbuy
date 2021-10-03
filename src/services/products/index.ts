import { AppRegistry } from "react-native";
import { dummyProducts } from "../api";

export const getAllProducts = async () => {
    const response = dummyProducts.get('/products')
    return response
}