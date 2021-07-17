import React, { useState } from "react";
function Login(){
    
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
                <br></br><br></br>
                {showProfile && <h1>{username}</h1>}
            </fieldset>
        </React.Fragment>
    )
};

export default Login;