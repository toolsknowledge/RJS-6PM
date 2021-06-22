//import Component class
//Component is the predefined class
//Component class used to create the "custom components"
import { Component } from "react";


//state
//component own data called as state
//we will declare state by using intefaces
interface IState{}


//props
//component receives the data from other component with the help of props
//we will declare the props by using interface
interface IProps{}


//create the component
class First extends Component<IProps,IState>{
        constructor(props:IProps){
            super(props);
        }

        render(){
            return(
                <h1>Welcome to First Component !!!</h1>
            )
        }
};

export default First;