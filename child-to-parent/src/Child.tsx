import { Component } from "react";
interface IProps{
    key1 : (arg1:any)=>void
}
interface IState{

}
class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
       return(
           <button onClick={()=>{this.props.key1({"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"})}}>Click Me</button>
       )
    }
}
export default Child;