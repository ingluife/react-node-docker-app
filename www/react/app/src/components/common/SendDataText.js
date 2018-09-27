export default function sendDataText(textSpan, textP, value) {
        fetch('http://localhost:3000/api',
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "cors", // no-cors, cors, *same-origin
            referrer: "no-referrer", // no-referrer, *client
            credentials: "same-origin", // include, same-origin, *omit
            body:"text="+value, // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(res => {
            console.log("Response: ",res);
            typeof(textSpan) != "undefined" ? textSpan.innerHTML=res.text : console.log("Span not defined");
            typeof(textP) != "undefined" ? textP.innerHTML="<b>Esta es la respuesta de la API de Node:</b> "+res.result : console.log("Div no defined");
        })
        .catch(e => console.log("An error has occured",e));
  }