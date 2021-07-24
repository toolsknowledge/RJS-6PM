import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsActions from "./actions/ProductsActionImplementation";
interface IState{}
interface IProps{
    my_fun:any;
    result:any;
}
class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    componentDidMount(){
        this.props.my_fun();
    }
    render(){
      return(
        <React.Fragment>
            {JSON.stringify(this.props.result)}
        </React.Fragment>
      )
    }
}
const receive = (state:any)=>{
    return{
       result : state
    }
};
const send = (dispatch:any)=>{
  return{
    my_fun : ()=>{ dispatch( ProductsActions() ) }
  }
}
export default connect(receive,send)(App);