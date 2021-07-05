import React, { Component } from "react";
import { match as Match } from "react-router-dom";

interface IState{
    message:string;
}
interface IProps{
    match:Match<routeParams>;
}

interface routeParams{
    category:string;
}



class Pagetwo extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            message : "Page Two !!!"
        }
    }
    render(){
        return(
            <React.Fragment>
               <h1>{this.props.match.params.category}</h1> 
            </React.Fragment>
        )
    }
}
export default Pagetwo;