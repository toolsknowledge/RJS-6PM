import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActions";

const ProductsActions = ()=>{
    return async (dispatch:Dispatch<ProductsActionTypes>)=>{
        dispatch({
            type : PRODUCTS_LOADING,
            loading : false,
            products : [],
            error : ""
        })
        try{
            const {data} = await axios.get(`http://localhost:8080/products`);
            dispatch({
                type : PRODUCTS_LOADING_SUCCESS,
                loading : true,
                products : data,
                error : ""
            })
        }catch(e){
            dispatch({
                type : PRODUCTS_LOADING_FAIL,
                loading : true,
                products: [],
                error : "Network Error"
            })
        }
    }
};

export default ProductsActions;