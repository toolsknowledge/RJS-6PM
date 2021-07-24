import Product from "../model/Product";
export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS:string = "PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string = "PRODUCTS_LOADING_FAIL";
interface ProductsAsync{
    loading:boolean;
    products:Product[];
    error:string;
}
interface ProductsLoading extends ProductsAsync{
    type : typeof PRODUCTS_LOADING;
}
interface ProductsLoadingSuccess extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_SUCCESS;
}
interface ProductsLoadingFail extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_FAIL;
}
export type ProductsActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;
