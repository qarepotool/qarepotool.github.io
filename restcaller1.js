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
    var data1 = {};
    xhr.open("POST", "https://api.trello.com/1/cards");    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    data1.key = key;
    data1.token  = token;
    data1.name  = document.title;
    /*data1.desc  = document.location.href;*/
    data1.desc  = "TEST CUSTOM DEC";
    data1.idList  = "5b4c5e0cd64b060e1ac1c838";
    var json = JSON.stringify(data1);
    xhr.send(json);
    var jsonvalue = JSON.parse(xhr.responseText);
    var cardcreated = jsonvalue['id'];
  };
}).call(this);
