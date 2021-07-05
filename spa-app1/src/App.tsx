import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
interface IState{}
interface IProps{}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
  }
  render(){
    return(
       <React.Fragment>
          <Router>
              <NavLink to="/" 
                       activeStyle={{color:"red"}} 
                       style={{marginRight:100}}
                       exact={true} strict><b>Page_One</b></NavLink>
              <NavLink to="/page_two" 
                       activeStyle={{color:"red"}} 
                       style={{marginRight:100}}
                       exact={true} strict><b>Page_Two</b></NavLink>
              <NavLink to="/page_three" 
                       activeStyle={{color:"red"}} 
                       exact={true} strict><b>Page_Three</b></NavLink>
          
              <br></br><br></br>
              <Route path="/" 
                     component={Pageone}
                     exact={true} strict></Route>
              <Route path="/page_two" 
                     component={Pagetwo}
                     exact={true} strict></Route>
              <Route path="/page_three" 
                     component={Pagethree}
                     exact={true} strict></Route>
          
          </Router>
       </React.Fragment>
    )
  }
}
export default App;