import Product from "../model/Product";
import { ProductsActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActions";

interface IState{
    loading : boolean;
    products: Product[];
    error : string;
}

const initialState:IState = {
    loading : false,
    products : [],
    error : ""
}

const productReducer = (state=initialState,actions:ProductsActionTypes)=>{
    switch(actions.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCCESS:
        case PRODUCTS_LOADING_FAIL:
            return{
                ...state,
                loading : actions.loading,
                products:actions.products,
                error : actions.error
            }
        default:
            return state
    }
}
export default productReducer;







