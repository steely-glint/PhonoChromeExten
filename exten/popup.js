var phonoUsers = {
  requestList: function() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://gont.westhawk.co.uk/bm2012/jsonusers.groovy", true);
    req.onload = this.showUsers_.bind(this);
    req.send(null);
  },

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showUsers_: function (e) {
    var resp = e.target.responseText;
    var users = JSON.parse(resp);
    console.log("resp = "+resp);
    for (var i = 0; i < users.length; i++) {
      console.log("user ["+i+"] = "+users[i].user);
      var a = document.createElement('a');
      var b = document.createElement('br');
      a.onclick = function(){
	window.open("http://s.phono.com/releases/1.1/samples/kitchen-sink/www/index.html?dial="+this.href);
      };
      var bits = users[i].address.split("@");
      var ad = bits[0].replace("\\40","@");
      a.href=bits[1]+":"+ad;
      a.innerHTML = users[i].user;
      document.body.appendChild(a);
      document.body.appendChild(b);
    }
  }

};

document.addEventListener('DOMContentLoaded', function () {
  phonoUsers.requestList();
});
