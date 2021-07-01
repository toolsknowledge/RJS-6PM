import React, { Component } from "react";
import axios from "axios";
interface IState{
    result:any;
}
interface IProps{}
class Uppercase extends Component<IProps,IState>{
    my_text = React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props);
        this.state = {
            result : {}
        }
    }
    myFun = ()=>{
        axios.post(`http://test-routes.herokuapp.com/test/uppercase`,{"message":this.my_text.current?.value})
                    .then((posRes)=>{
                        const { data } = posRes;
                        this.setState({
                            result : data
                        })
                    },(errRes)=>{
                console.log(errRes);
        })
    };
    render(){
        return(
            <React.Fragment>
                <input type="text" ref={this.my_text}></input>
                <button onClick={this.myFun}>Click Me</button>
                <br></br>
                <h1>{this.state.result.message}</h1>
            </React.Fragment>
        )
    }
}
export default Uppercase;