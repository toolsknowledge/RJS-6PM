import React, { Component } from "react";
import { History,LocationState } from "history";


interface IState{
    message:string
}
interface IProps{
    history:History<LocationState>;
}

class Pageone extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            message : "Page One !!!"
        }
    }

    myFun = ()=>{
        this.props.history.push(`/page_two/mango`);
    };
   

    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"red"}}>{this.state.message}</h1>
                <button onClick={this.myFun}>Navigate</button>
            </React.Fragment>
        )
    }
}
export default Pageone;