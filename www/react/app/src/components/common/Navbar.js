import React from 'react';
import SendDataText from './SendDataText.js';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class ContentNavbar extends React.Component {
	render() {
		return (
			<Navbar inverse fixedTop>
				<Navbar.Header>
					<a href="#home">
						<img width="300" style={{marginTop: 6 + 'px'}} src="./app/dist/images/toolbox-logo.png"/>
					</a>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullLeft>
					<FormGroup>
						<FormControl type="text" id="inputsend" placeholder="Ingresa un texto o nombre" />
					</FormGroup>{' '}
					<Button bsStyle="info" onClick={(e) => this.eventClickSend(e)} type="button">Enviar a NODE</Button>
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		)
	}
	eventClickSend(e){
		e.preventDefault();
		var textSpan = document.getElementById("text");
		var textP = document.getElementById("textcontent");
		var input = document.getElementById("inputsend");
		if(input.value!="")
			SendDataText(textSpan, textP, input.value);
		else
			textP.innerHTML="Debes ingresar un nombre o texto en el cuadro de texto de la barra superior.";
	}
}
export default ContentNavbar;