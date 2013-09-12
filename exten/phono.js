var apiKey="C17D167F-09C6-4E4C-A3DD-2025D48BA243";
var phone = {onIncomingCall:function (evt) { call=evt.call;}};
var audio = {media:{audio:true,video:false}};
var connectionUrl = "https://jiraconf.westhawk.co.uk:8443/http-bind";
var call;
var phono = $.phono(
    {apiKey:apiKey,
     connectionUrl:connectionUrl, 
     audio:audio,
     phone:phone,
     onReady: function() {
        var name = $('a#header-details-user-fullname').attr('data-username');
        console.log("Phono is ready for "+name);
        $.ajax({url:"https://jiraconf.westhawk.co.uk:8443/prov/setJid.groovy?name="+name+"&jid=xmpp:"+phono.sessionId});
     }
});
