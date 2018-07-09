import React, { Component} from "react";
import "./App.css";
import { Notify, Swal } from "./components/Notification";

class App extends Component{

    componentDidMount()
    {
        Notify('info', 'Noty is here!');
        Swal('success', 'Swal is Here!', 'And Working!');
    }

  render(){
    return(
      <div className="App">
        <h1> React is here!!! </h1>
      </div>
    );
  }
}

export default App;
