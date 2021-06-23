//import "Component" class
//Component is the "predefined" class
//Component class, used to create the "custom" components, Header, Body, Footer,.......
//Component class present in "react" package.
import { Component } from "react";



//state
//component own data called as state
//we will represent state by using intefaces
interface IState{

}

//props
//component receives the data from another component by using props
//we will define props by using intefaces
interface IProps{

}


//create the component
class Header extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <h1>Header Soon....!</h1>
        )
    }
};

export default Header;





