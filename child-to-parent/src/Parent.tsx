import React, { Component } from "react";
import Child from "./Child";
interface IState{
    my_data:any;
}
interface IProps{}
class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            my_data : {}
        }
    }
    myFun = (arg1:any)=>{
        this.setState({
            my_data : arg1
        })
    };

    myFun1 = ()=>{
        console.log("double clicked here");
    };

    render(){
        return(
            <React.Fragment>
                <Child key1={this.myFun}></Child> 
                <h1>{JSON.stringify(this.state.my_data)}</h1> 
                <button onDoubleClick={this.myFun1}>Double Click</button>  
            </React.Fragment>
        )
    }
};
export default Parent;