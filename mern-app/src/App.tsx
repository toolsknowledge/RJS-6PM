import React, { Component } from "react";
import axios from "axios";

interface IState{
  result:any;
}

interface IProps{

}
class App extends Component<IProps,IState>{
    uname = React.createRef<HTMLInputElement>();
    upwd = React.createRef<HTMLInputElement>();
    constructor(props:IProps){
      super(props);
      this.state = {
        result : {}
      }
    }

    login = ()=>{
      //url = ""+process.env.REACT_APP_BASE_URL;
      axios.post("http://localhost:8080/login",{"uname":this.uname.current?.value,
                                                            "upwd":this.upwd.current?.value}).then((posRes)=>{
                const { data } = posRes;
                this.setState({
                  result : data
                })
                                                            },(errRes)=>{
                console.log(errRes);
      });
    }

    render(){
      return(
        <React.Fragment>
            <input type="text" ref={this.uname}></input>
            <br></br><br></br>
            <input type="password" ref={this.upwd}></input>
            <br></br><br></br>
            <button onClick={this.login}>Login</button>
            <br></br><br></br>
            <h1>{JSON.stringify(this.state.result)}</h1>
        </React.Fragment>
      )
    }
};
export default App;




