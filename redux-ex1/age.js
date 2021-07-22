//store
//reducer
//initialState
//state
//dispatch
//subscribe
//action
//payload


//import createStore function
//createStore function used to create the store
const { createStore } = require("redux");

//create the initialState
const initialState = {
    age : 20
}


//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age : state.age + action.value
            }
        case "AGE_DOWN":
            return{
                ...state,
                age : state.age - action.value
            }
        default:
            return state;
    }
};

//create the store
const store = createStore(reducer);

//subscribe
store.subscribe(()=>{
    console.log( store.getState() );
});

//dispatch
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:1});
