import React from "react";

function Input({type,placeholder,onKeyDown},ref){
    return(
        <input type={type} placeholder={placeholder} onKeyDown={onKeyDown} ref={ref}></input>
    )
};

const demoComponent = React.forwardRef(Input);
export default demoComponent;