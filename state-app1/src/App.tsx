import React, { Component } from "react";
interface IState{
    key1 : string
}
interface IProps{}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
      super(props);
      this.state = {
        key1 : "ReactJS With JSX"
      }
  }

  myFun = ()=>{
    this.setState({
      key1 : "ReactJS With TSX"
    }) 
  }


  render(){
    return(
       <React.Fragment>
          <h1>{this.state.key1}</h1>
          <button onClick={this.myFun}>Click Me</button>
       </React.Fragment>
    )
  }
};
export default App;