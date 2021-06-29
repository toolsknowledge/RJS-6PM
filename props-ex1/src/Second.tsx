import React, { Component } from "react";

interface IState{

}

interface IProps{
    strData:string;
    numData:number;
    boolData:boolean;
}

class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.strData}</h1>
                <h1>{this.props.numData}</h1>
                <h1>{JSON.stringify(this.props.boolData)}</h1>
            </React.Fragment>
        )
    }
};

export default Second;