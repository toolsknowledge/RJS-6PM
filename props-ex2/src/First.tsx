import { Component } from "react";
import Second from "./Second";
interface IState{
    key1:any;
    key2:any;
}
interface IProps{}
class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : {"sub":"React with typescript"},
            key2 : {"sub":"nodejs with typescript"}
        }
    }
    render(){
        return(
            <Second key1={this.state.key1}>{this.state.key2}</Second>
        )
    }
}
export default First;