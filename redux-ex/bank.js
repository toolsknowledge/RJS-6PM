//import createStore
const { createStore } = require("redux");
//create the initialState
const initialState = {
    bal : 10000
}
//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal-action.value
            }
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal + action.value
            }
        default:
            return state;
        
    }
}
//create the store
const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
})
//dispatch
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"DEPOSIT",value:5000});