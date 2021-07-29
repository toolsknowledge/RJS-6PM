import React,{ Component } from "react";
import { connect } from "react-redux";
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
         <React.Fragment>
              {JSON.stringify(this.props.result)}
              <br></br><br></br>
              <button onClick={this.props.withdraw}>Withdraw</button>
         </React.Fragment>
      )
    }
};

const receive = (state)=>{
    return{
       result : state
    }
}

const send = (dispatch)=>{
    return{
       withdraw : ()=>{ dispatch({type:"WITHDRAW",value:1000}) }
    }
}

export default connect(receive,send)(App);