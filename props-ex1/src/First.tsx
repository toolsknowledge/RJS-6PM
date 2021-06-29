import React, { Component } from "react";
import Second from "./Second";

interface IState{
    key1 : string;
    key2 : number;
    key3 : boolean;
};

interface IProps{

};

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1:"Hello",
            key2 : 100,
            key3 : true
        }
    }
    render(){
        return(
            <React.Fragment>
                <Second strData={this.state.key1} numData={this.state.key2} boolData={this.state.key3}></Second>
            </React.Fragment>
        )
    }
};

export default First;

