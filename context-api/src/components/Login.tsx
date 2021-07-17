import React, { useContext, useState } from "react";
import { loginContext } from "../context/LoginContext";
function Login(){
    const {setShowProfile,setUsername}  = useContext(loginContext);
    
    return(
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <input type="text" placeholder="User Name..." 
                       onChange={(event)=>{setUsername(event.target.value)}}></input>
                <br></br><br></br>
                <input type="password" placeholder="Password...."></input>
                <br></br><br></br>
                <button onClick={()=>{setShowProfile(true)}}>Login</button>
               
            </fieldset>
        </React.Fragment>
    )
};

export default Login;