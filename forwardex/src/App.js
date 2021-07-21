import logo from './logo.svg';
import './App.css';
import React,{useRef,useEffect} from "react";
import Input from "./components/Input";

function App() {
  const uname = useRef();
  const upwd = useRef();
  const email = useRef();
  const submitRef = useRef();

  useEffect(()=>{
      uname.current.focus();
  },[]);

  function unamefn(e){
    if(e.key == "Enter"){
      upwd.current.focus();
    }
  }

  function upwdFn(e){
    if(e.key == "Enter"){
      email.current.focus();
    }
  }

  function emailFn(e){
    if(e.key == "Enter"){
      submitRef.current.focus();
    }
  }

  function submitFn(){}

  return (
    <div className="App">
        <Input type="text" placeholder="user name" ref={uname} onKeyDown={unamefn}></Input>
        <br></br><br></br>
        <Input type="password" placeholder="password" ref={upwd} onKeyDown={upwdFn}></Input>
        <br></br><br></br>
        <Input type="email" placeholder="email" ref={email} onKeyDown={emailFn}></Input>
        <br></br><br></br>
        <button ref={submitRef} onKeyDown={submitFn}>Submit</button>
    </div>
  );
}

export default App;
