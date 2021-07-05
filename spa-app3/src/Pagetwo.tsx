import React, { Component } from "react";
import { Location } from "history";
interface IState{}
interface IProps{
    location:Location;
}
class Pagetwo extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                {this.props.location.search.split("=")[1]}
            </React.Fragment>
        )
    }
}
export default Pagetwo;