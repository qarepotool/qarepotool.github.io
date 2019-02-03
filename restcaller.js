// Generated by CoffeeScript 1.3.3
(function() {
  var e;

  if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
    e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');
    document.body.appendChild(e);
  }

  window.saveTrelloCard = function(idList, key, token) {
    var data = null;  
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
    });
    xhr.open("POST", "https://api.trello.com/1/cards");    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ "token": token, "name": document.title,"desc": document.location.href,"idList": idList }));
    var json = JSON.parse(xhr.responseText);
    var yourData = json["Data"]
  };

}).call(this);
