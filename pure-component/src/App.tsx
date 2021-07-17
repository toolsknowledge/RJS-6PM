import React,{ Component, PureComponent } from "react";
interface IState{
    num : number
}
interface IProps{}
class App extends PureComponent<IProps,IState>{
    constructor(props:IProps){
      super(props);
      this.state = {
        num : 1
      }
    }

    componentDidMount(){
        setInterval(()=>{
           this.setState({
             num : 1
           })
        },2000);
    }

    // shouldComponentUpdate(){
    //    return false;
    // }


    render(){
      console.log("Hello");
      return(
        <React.Fragment>
            <h1>{this.state.num}</h1>
        </React.Fragment>
      )
    }
}
export default App;