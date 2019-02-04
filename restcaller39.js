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
    //CREACION CARD ID
    var data1 = {};
    xhr.open("POST", "https://api.trello.com/1/cards",false);    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    data1.key = key;
    data1.token  = token;
    data1.name  = document.title;
    data1.desc  = document.location.href;
    data1.idList  = "5b61b58259e21d8a1c18a247";
    var json2 = JSON.stringify(data1);
    xhr.send(json2)
    //console.log(xhr.responseText);
    //console.log(xhr.readyState);
    //console.log(xhr.status);
          var jsonvalue = JSON.parse(xhr.responseText);
          var cardcreated = jsonvalue['id'];
  var jsonvalue = JSON.parse(xhr.responseText);
  var cardcreated = jsonvalue['id'];
    // CREACION DE ARRAY DE CUSTOM FIELDS
    var arr = Create2DArray(16);
    arr[0][0]="5c531ee01f9d420689bcd3e3"; 
    arr[0][1]="5c531f09f4c44165b6600933"; 
    arr[0][2]="5c531f14d53bd95e9223671e"; 
    arr[0][3]="5c531f1e65b1413ab80cc6cb"; 
    arr[0][4]="5c531f42b330ba2247d259cd"; 
    arr[0][5]="5c531f8a80b0607586e345f3"; 
    arr[0][6]="5c531f97e37472244a83b94c"; 
    arr[0][7]="5c531fc28c81a139dc734e11"; 
    arr[0][8]="5c531fcf7528ad5e690fc7fb"; 
    arr[0][9]="5c531fdebc667a771046e6ee"; 
    arr[0][10]="5c531fe65a75c983570f87e3";
    arr[0][11]="5c531fefca401d11028fdda9";
    arr[0][12]="5c531ffbba9fe524639af46b";
    arr[0][13]="5c532003aec9b0223db3dd6d";
    arr[0][14]="5c53200fc348ab7ac13488bb";
    arr[0][15]="5c532017aa78c45fabead47e";
    arr[1][0]=document.getElementById('key-val').textContent;
    arr[1][1]=document.querySelector('#customfield_10476-val').textContent;
    //arr[1][1]=document.getElementById('customfield_10476-val').value;
    
    arr[1][2]=document.getElementById('customfield_10361-val').nodeValue;
    arr[1][3]=document.getElementById('customfield_10363-val').textContent;
    arr[1][4]=document.getElementById('customfield_10806-val').textContent;
    arr[1][5]=document.getElementById('customfield_11408-val').textContent;
    arr[1][6]=document.getElementById('type-val').textContent;
    arr[1][7]=document.getElementById('status-val').textContent;
    arr[1][8]=document.getElementById('reporter-val').textContent;
    arr[1][9]=document.getElementById('customfield_10376-val').textContent;
    //arr[1][10]=document.getElementById('customfield_10377-val').textContent;
    arr[1][11]=document.getElementById('customfield_10366-val').textContent;
    arr[1][12]=document.getElementById('description-val').textContent;
    //arr[1][13]=document.getElementById('customfield_10392-val').textContent;
    arr[1][14]=document.getElementById('customfield_10361-val').textContent;
    arr[1][15]=document.getElementById('customfield_10361-val').textContent;
    // CREACION DE UPDATE DE CUSTOM FIELDS
    //console.log(arr);
    for (var j=0;j<16;j++) {
      if(arr[1][j]==null){
        console.log("Este campo es null" + arr[1][j]);
      }
      else{
      var xhrd = new XMLHttpRequest();
      xhrd.timeout=2000;
      xhrd.open("PUT", "https://api.trello.com/1/card/"+cardcreated+"/customField/"+arr[0][j]+"/item?token="+token+"&key="+key);    
      xhrd.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      var json3 = "{ \"value\": { \"text\": \"" + arr[1][j] + "\" }}";
      console.log(json3);
      //alert(json3)
      xhrd.send(json3);
    }
    }
  };
}).call(this);

function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}
