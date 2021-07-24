import React, { useCallback, useState } from "react";
import Demo from "./Demo";
const App = ()=>{
    const [count,setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount(c=>c+1)
    },[setCount]);

    return(
       <React.Fragment>
           <Demo increment={increment}></Demo>
           <br></br><br></br>
           <h1>Count.{count}</h1>
       </React.Fragment>
    )
};

export default App;