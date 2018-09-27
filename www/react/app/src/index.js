import React from "react";
import ReactDOM from "react-dom";
import ComntentNavbar from './components/ComntentNavbar.js';

class Layout extends React.Component{
    render(){
        return <h2>Hola mundo</h2>;
    }
}

const app = document.getElementById("app");

ReactDOM.render(<ComntentNavbar/>, app);