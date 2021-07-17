import React,{useState} from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { loginContext } from "./context/LoginContext";

function App() {
  const [username,setUsername] = useState("");
  const [showProfile,setShowProfile] = useState(false);
  return (
    <div className="App">
        <loginContext.Provider value={{username,setUsername,showProfile,setShowProfile}}>
          {showProfile?<Profile /> : <Login />}
        </loginContext.Provider>
    </div>
  );
}

export default App;
