var phonoUsers = {
  requestList: function() {
    var req = new XMLHttpRequest();
    req.open("GET", "https://jiraconf.westhawk.co.uk:8443/prov/jsonusers.groovy", true);
    req.onload = this.showUsers_.bind(this);
    req.send(null);
  },

  showUsers_: function (e) {
    var resp = e.target.responseText;
    var users = JSON.parse(resp);
    console.log("resp = "+resp);
    var b;
    for (var i = 0; i < users.length; i++) {
      console.log("user ["+i+"] = "+users[i].user);
      b = document.createElement('br');
      var a = document.createElement('a');
      a.onclick = function(){
        addr = this.href;
        console.log("asking Phono to dial"+addr);
        chrome.tabs.executeScript(null,
        {code:"call = phono.phone.dial('" + addr + "')"});
        window.close();
      };
      a.href=users[i].address;
      a.innerHTML = users[i].user;
      document.body.appendChild(a);
      document.body.appendChild(b);
    }
    b = document.createElement('br');
    document.body.appendChild(b);
    var buttons=["answer","hangup","mute","unmute"];
    for (var i = 0; i < buttons.length; i++) {
      var a = document.createElement('a');
      b = document.createElement('br');
      a.onclick = function(){
        var act = this.innerHTML;
        console.log("asking Phono to "+act);
        chrome.tabs.executeScript(null,
        {code:"call."+act+"()"});
        window.close();
      };
      a.innerHTML = buttons[i];
      document.body.appendChild(a);
      document.body.appendChild(b);
    }
    b = document.createElement('br');
    document.body.appendChild(b);
    for (var i = 0; i < 10; i++) {
      var a = document.createElement('a');
      a.onclick = function(){
        var act = this.innerHTML;
        console.log("asking Phono to "+act);
        chrome.tabs.executeScript(null,
        {code:"call.digit('"+act.trim()+"')"});
      };
      a.innerHTML = " "+i;
      document.body.appendChild(a);
    }
    b = document.createElement('br');
    document.body.appendChild(b);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  phonoUsers.requestList();
});
