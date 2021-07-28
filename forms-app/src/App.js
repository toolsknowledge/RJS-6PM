import './App.css';
import rocket from "./assets/images/rocket.png";
import Signup from "./components/Signup";
function App() {
  return (
      <div className="contaier mt-5">
          <div className="row">
              <div className="col-md-5">
                  <Signup />
              </div>
              <div className="col-md-7">
                  <img className="img-fluid w-100" src={rocket}></img>
              </div>
          </div>
      </div>
  );
}

export default App;
