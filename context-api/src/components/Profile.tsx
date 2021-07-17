import React, { useContext } from "react";
import { loginContext } from "../context/LoginContext";
function Profile(){
    
    const {username} = useContext(loginContext);
    return(
        <React.Fragment>
            <h1>Profile Component</h1>
            <h1>{username}</h1>
        </React.Fragment>
    )
}
export default Profile;