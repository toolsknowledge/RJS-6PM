import { Typography } from "@material-ui/core";
import React, { Component } from "react";
interface IState{}
interface IProps{
    key1:any;
}
class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Typography variant="h1" color="primary">
                    {JSON.stringify(this.props.key1)}
                </Typography>
                <Typography variant="h1" color="secondary">
                    {JSON.stringify(this.props.children)}
                </Typography>
            </React.Fragment>
        )
    }
}
export default Second;