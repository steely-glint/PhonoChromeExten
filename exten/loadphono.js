function dialPhono(addr){
     var message = {command:'dial',address:addr};
     var iframe = document.getElementById('phonoFrame');
     console.log("sending message to phono"+message);
     iframe.contentWindow.postMessage(message, '*');
}
