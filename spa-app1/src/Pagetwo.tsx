import React, { Component } from "react";
interface IState{
    message:string;
}
interface IProps{

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
                <h1 style={{color:"green"}}>{this.state.message}</h1>
            </React.Fragment>
        )
    }
}
export default Pagetwo;

