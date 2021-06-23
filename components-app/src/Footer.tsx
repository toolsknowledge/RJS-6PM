import { Component } from "react";

interface IState{}

interface IProps{}

class Footer extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <h3>Footer Soon...!</h3>
        )
    }
};

export default Footer;