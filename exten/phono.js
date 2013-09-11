var apiKey="C17D167F-09C6-4E4C-A3DD-2025D48BA243";
var phone = {onIncomingCall:function (evt) { call=evt.call;call.answer()}};
var audio = {media:{audio:true,video:false}};
var connectionUrl = "https://app.v1-1.phono.com/http-bind";
var phono = $.phono({apiKey:apiKey, connectionUrl:connectionUrl, audio:audio,phone:phone});
window.addEventListener('message', function(event) {
  var command = event.data.command;
  var name = event.data.address || 'app:9996160714';
  console.log("got message: "+command+" address "+name);
  switch(command) {
    case 'dial':
      phono.phone.dial(name);
      break;
  }
});
