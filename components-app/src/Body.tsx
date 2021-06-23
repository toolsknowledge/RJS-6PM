import { Component } from "react";

interface IState{}

interface IProps{}

class Body extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <h2>ECommerce Application Soon....!</h2>
        )
    }
};

export default Body;