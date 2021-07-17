import React, { useEffect, useState } from "react";
import axios from "axios";

function App(){
    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://mernserver-env.eba-dhqkdnmp.us-east-2.elasticbeanstalk.com/products`).then((posRes)=>{
            const { data } = posRes;
            setProducts(data);
        },(errRes)=>{
            console.log(errRes);
        });
    },[]);

    return(
        <React.Fragment>
             <table border="1" align="center" style={{textAlign:"center",borderCollapse:"collapse"}}
                    cellPadding="10">
                <tr>
                   <th>SNO</th>
                   <th>NAME</th>
                   <th>BRAND</th>
                   <th>IMAGE</th>
                </tr>
                {products.map((element,index)=>(
                   <tr key={index}>
                      <td>{index+1}</td>
                      <td>{element.name}</td>
                      <td>{element.brand}</td>
                      <td><img width="100" height="100" src={element.image}></img></td> 
                    </tr>
                ))}
             </table>
        </React.Fragment>
    )
}

export default App;