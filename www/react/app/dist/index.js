import React from "react";
import ReactDOM from "react-dom";
import ContentNavbar from '../src/components/common/Navbar.js';
import ContentFooter from '../src/components/common/Footer.js';
import ContentIndex from '../src/components/index/Content.js';

class Layout extends React.Component{
    render(){
        return <h2>Hola mundo</h2>;
    }
}

const contentNavbar = document.getElementById("content-navbar");
const contentPage = document.getElementById("content-page");
const contentFooter = document.getElementById("content-footer");

ReactDOM.render(<ContentNavbar/>, contentNavbar);
ReactDOM.render(<ContentIndex/>, contentPage);
ReactDOM.render(<ContentFooter/>, contentFooter);