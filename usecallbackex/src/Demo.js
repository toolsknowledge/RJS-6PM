import React from "react";

const Demo = ({increment})=>{
    return(
        <React.Fragment>
            <button onClick={increment}>ClickMe</button>
        </React.Fragment>
    )
};

export default React.memo(Demo);