import React, { Component } from "react";


//declare the state
interface IState{
    key1 : string;
    key2 : number;
    key3 : boolean;
    key4 : string[];
    key5 : any;
    key6 : any[];
}


interface IProps{}

class State extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "data from database soon....!",
            key2 :  100,
            key3 : true,
            key4 : ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"],
            key5 : {"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"},
            key6 : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                    {"p_id":222,"p_name":"p_two","p_cost":20000},
                    {"p_id":333,"p_name":"p_three","p_cost":30000},
                    {"p_id":444,"p_name":"p_four","p_cost":40000},
                    {"p_id":555,"p_name":"p_five","p_cost":50000}]
        }
    }

    render(){
        return(
             <React.Fragment>

                 <table>
                     <tr>
                         <th>SNO</th>
                         <th>P_ID</th>
                         <th>P_NAME</th>
                         <th>P_COST</th>
                     </tr>
                     {this.state.key6.map((element,index)=>(
                         <tr key={index}>
                             <td>{index+1}</td>
                             <td>{element.p_id}</td>
                             <td>{element.p_name}</td>
                             <td>{element.p_cost}</td>
                         </tr>
                     ))}
                 </table>



                 <h1>{this.state.key1}</h1>
                 <h1>{this.state.key2}</h1>
                 <h1>{JSON.stringify(this.state.key3)}</h1>
                  
                 {this.state.key4.map((element,index)=>(
                     <span key={index}>
                         <h1>{element}</h1>
                     </span>
                 ))}

                 <h1>{JSON.stringify(this.state.key5)}</h1>
             
             </React.Fragment>
        )
    }

};

export default State;