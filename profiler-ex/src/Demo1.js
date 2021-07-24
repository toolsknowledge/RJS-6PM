import React, { useState,Profiler } from "react";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

const Demo1 = ()=>{
    const [uname,setUname] = useState("");
    const [upwd,setUpwd] = useState("");

    const handleInputChange = (e)=>{
        if(e.target.name == "uname"){
            setUname(e.target.value);
        }else{
            setUpwd(e.target.value);
        }
    }

    const fun_one = (id,phase,startTime,totalTime,x,y,z)=>{
        console.log( id, phase , startTime, totalTime);
    }

    return(
        <React.Fragment>
            <input type="text" value={uname} onChange={handleInputChange} name="uname"></input>
            <br></br><br></br>
            <input type="password" value={upwd} onChange={handleInputChange} name="upwd"></input>
            <br></br><br></br>
            <button>Submit</button>

            <br></br><br></br>
            <Profiler id="unameid" onRender={fun_one}>
                <Demo2 key1="Demo2 Component"></Demo2>
            </Profiler>

            <Profiler id="upwdid" onRender={fun_one}>
                <Demo3 key1="Demo3 Component"></Demo3>
            </Profiler>

        </React.Fragment>
    )
};

export default Demo1;