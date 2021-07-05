import React, { Component } from "react";

import { History,LocationState } from "history";

interface IState{
    qty:number;
}
interface IProps{
    history : History<LocationState>;  
}
class Pageone extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            qty : 1
        }
    }

    myFun = (data:any)=>{
        this.setState({
            qty : data
        })
    }

    navigateFn = ()=>{
        this.props.history.push(`/page_two?qty=${this.state.qty}`)
    };

    render(){
        return(
            <React.Fragment>
                <select value={this.state.qty} onChange={(e)=>this.myFun(e.target.value)}>
                    {[1,2,3,4,5,6,7,8,9,10].map((element,index)=>(
                        <option key={index} value={element}>{element}</option>
                    ))}
                </select>
                <button onClick={this.navigateFn}>Click Me</button>
            </React.Fragment>
        )
    }
}
export default Pageone;