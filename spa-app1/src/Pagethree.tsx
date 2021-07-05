import React, { Component } from "react";
interface IState{
    message:string;
}
interface IProps{

}
class Pagethree extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            message : "Page Three !!!"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"blue"}}>{this.state.message}</h1>
            </React.Fragment>
        )
    }
}
export default Pagethree;

