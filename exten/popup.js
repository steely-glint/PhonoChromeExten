var phonoUsers = {
  requestList: function() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://gont.westhawk.co.uk/bm2012/jsonusers.groovy", true);
    req.onload = this.showUsers_.bind(this);
    req.send(null);
  },

  showUsers_: function (e) {
    var resp = e.target.responseText;
    var users = JSON.parse(resp);
    console.log("resp = "+resp);
    for (var i = 0; i < users.length; i++) {
      console.log("user ["+i+"] = "+users[i].user);
      var a = document.createElement('a');
      var b = document.createElement('br');
      a.onclick = function(){
        addr = this.href;
        console.log("asking Phono to dial"+addr);
        chrome.tabs.executeScript(null,
        {code:"phono.phone.dial('" + addr + "')"});
        window.close();
      };
      a.href=users[i].address;
      a.innerHTML = users[i].user;
      document.body.appendChild(a);
      document.body.appendChild(b);
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  phonoUsers.requestList();
});
