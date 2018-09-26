'use strict';

const express = require('express');
var app = new express();
var bodyParser = require("body-parser");
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api', (req, res) => {
    var text_sended = req.body.text;
    if(typeof(text_sended)!="undefined")
        var resultSend = 'El texto recibido es "'+text_sended+'"!';
    else
    var resultSend ='No se ha definido ningun texto!';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ result: resultSend, text: text_sended }));
    console.log(resultSend);
});

app.listen(3000, () => {
    console.log('Server up!');
});