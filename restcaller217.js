(function () {
  var e;
  var ventana;
  if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
    e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');
    document.body.appendChild(e);
  }

  window.saveTrelloCard = function (omnia, key, token) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    //CREACION CARD ID
    var data1 = {};
    xhr.open("POST", "https://api.trello.com/1/cards", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    data1.key = key;
    data1.token = token;
    data1.name = document.title;
    var auxtitle=document.title;
    data1.desc = document.location.href;
    data1.idList = "5b61b58259e21d8a1c18a247";
    var json2 = JSON.stringify(data1);
    xhr.send(json2)
    var jsonvalue = JSON.parse(xhr.responseText);
    var cardcreated = jsonvalue['id'];
    var shortlink = jsonvalue['shortLink'];

    
    
    // CREACION DE ARRAY DE CUSTOM FIELDS
    var arr = Create2DArray(16);
    var aux = "";
    arr[0][0] = "5c531ee01f9d420689bcd3e3";
    arr[0][1] = "5c531f09f4c44165b6600933";
    arr[0][2] = "5c531f14d53bd95e9223671e";
    arr[0][3] = "5c531f1e65b1413ab80cc6cb";
    arr[0][4] = "5c531f42b330ba2247d259cd";
    arr[0][5] = "5c531f8a80b0607586e345f3";
    arr[0][6] = "5c531f97e37472244a83b94c";
    arr[0][7] = "5c531fc28c81a139dc734e11";
    arr[0][8] = "5c531fcf7528ad5e690fc7fb";
    arr[0][9] = "5c531fdebc667a771046e6ee";
    arr[0][10] = "5c531fe65a75c983570f87e3";
    arr[0][11] = "5c531fefca401d11028fdda9";
    arr[0][12] = "5c531ffbba9fe524639af46b";
    arr[0][13] = "5c532003aec9b0223db3dd6d";

    //CAPTURA DEL CAMPO "KEY" DE LA CONTROL TABLE
    if (document.getElementById('key-val') == null) {
      console.log("Este campo es null " + arr[1][0]);
    } else {
      arr[1][0] = document.getElementById('key-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "APPLICATION" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10476-val') == null) {
      console.log("Este campo es null " + arr[1][1]);
    } else {
      arr[1][1] = document.getElementById('customfield_10476-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "VERSION" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10361-val') == null) {
      console.log("Este campo es null " + arr[1][2]);
    } else {
      arr[1][2] = document.getElementById('customfield_10361-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "RC" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10363-val') == null) {
      console.log("Este campo es null " + arr[1][3]);
    } else {
      arr[1][3] = document.getElementById('customfield_10363-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "CLARITY" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10806-val') == null) {
      console.log("Este campo es null " + arr[1][4]);
    } else {
      arr[1][4] = document.getElementById('customfield_10806-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "BUSINESS" DE LA CONTROL TABLE
    if (document.getElementById('customfield_11408-val') == null) {
      console.log("Este campo es null " + arr[1][5]);
    } else {
      arr[1][5] = document.getElementById('customfield_11408-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "TYPE" DE LA CONTROL TABLE
    if (document.getElementById('type-val') == null) {
      console.log("Este campo es null " + arr[1][6]);
    } else {
      arr[1][6] = document.getElementById('type-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "STATUS" DE LA CONTROL TABLE
    if (document.getElementById('status-val') == null) {
      console.log("Este campo es null " + arr[1][7]);
    } else {
      arr[1][7] = document.getElementById('status-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "PM" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10373-val') == null) {
      console.log("Este campo es null " + arr[1][8]);
    } else {
      arr[1][8] = document.getElementById('customfield_10373-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "PLANNED DELIVERY DATE TO QA" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10376-val') == null) {
      console.log("Este campo es null " + arr[1][9]);
    } else {
      arr[1][9] = document.getElementById('customfield_10376-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "PLANNED UAT" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10377-val') == null) {
      console.log("Este campo es null " + arr[1][10]);
    } else {
      arr[1][10] = document.getElementById('customfield_10377-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "PLANNED GO LIVE" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10366-val') == null) {
      console.log("Este campo es null " + arr[1][11]);
    } else {
      arr[1][11] = document.getElementById('customfield_10366-val').textContent.trim();
      Addduetocard(arr[1][11],cardcreated,key,token);
    }
    //CAPTURA DEL CAMPO "DESCRIPTION" DE LA CONTROL TABLE
    if (document.getElementById('description-val') == null) {
      console.log("Este campo es null " + arr[1][12]);
    } else {
      arr[1][12] = document.getElementById('description-val').textContent.trim();
    }
    //CAPTURA DEL CAMPO "DELIVERY FOLDER" DE LA CONTROL TABLE
    if (document.getElementById('customfield_10392-val') == null) {
      console.log("Este campo es null " + arr[1][13]);
    } else {
      var auxURL = document.getElementById('customfield_10392-val').textContent.trim();
      var myEscapedauxURL = encodeURI(auxURL);
      //alert (myEscapedauxURL);
      //alert("scaped string: " + myEscapedauxURL);
      arr[1][13] = myEscapedauxURL;
    }
  // CREACION DE UPDATE DE CUSTOM FIELDS
  for (var j = 0; j < 14; j++) {
    var xhrd = new XMLHttpRequest();
    xhrd.open("PUT", "https://api.trello.com/1/card/" + cardcreated + "/customField/" + arr[0][j] + "/item?token=" + token + "&key=" + key);
    xhrd.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (arr[1][j]== null){
      arr[1][j]=" ";
    }
    var json3 = "{ \"value\": { \"text\": \"" + arr[1][j] + "\" }}";
    var json4 = "{ \"value\": { \"text\": \"" + " " + "\" }}";
    try{
    xhrd.send(json3);
    }
    catch
    {
    xhrd.send(json4);  
    }
}


    typeofCT(arr, cardcreated,shortlink,key,token);

    //console.log(json3);
  };
}).call(this);

function test(arr,cardcreated){
  arr[1][14] = document.getElementById('element_1').value;
  var tipo = document.getElementById("element_2").selectedIndex.value;
  console.log(tipo);
  arr[1][15] = document.getElementById('element_3').value;
  alert("larga"+omnia);
  alert("larga"+tipo);
  alert("larga"+estimacion);
  if (tipo=1){
    Addlabeltocard("1",cardcreated,key,token);
  }
  else{
    Addlabeltocard("0",cardcreated,key,token);
  }

}

function Create2DArray(rows) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}

function Addduetocard(date,idcard,key,token){
  var data3 = {};
  var xhrg = new XMLHttpRequest();
  var initial = date.split(/\//);
  var newdate =[ initial[1], initial[0], initial[2] ].join('-'); 
  xhrg.open("PUT", "https://api.trello.com/1/cards/"+ idcard+"?due="+newdate+"&key="+key+"&token="+token, false);
  xhrg.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhrg.send();
}

function typeofCT(arr, cardcreated,shortlink,key,token) {
  var e;
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=350,height=400,left=100,top=100`;
  appencoded=btoa(arr[1][1]);
  verscoded=btoa(arr[1][2]);
  ventana=window.open("https://qarepotool.github.io/form/form.html?appcont="+appencoded+"&version="+verscoded+"&key=" +key +"&token="+ token+"&cardcreated="+cardcreated+"&short="+shortlink, "Datos propios", params);

}

function test(event){
  var omnia = document.getElementById('element_1').value;
  var tipo = document.getElementById("element_2").selectedIndex;
  var estimacion = document.getElementById('element_3').value;
  var cardcreated = document.getElementById('cardcreated').value;
  var key = document.getElementById('keyfield').value;
  var token = document.getElementById('tokenfield').value;
  var shotvaltocard = document.getElementById("shortfield").value
  var application1 = document.getElementById('appcontrolta').value;


  console.log("tipotext: "+tipo);
  console.log("omnia: "+omnia);
  console.log("estimacion: "+estimacion);
  console.log("cardcreated: "+cardcreated);
  console.log("key: "+key);
  console.log("token: "+token);
  if (tipo==1){
    Addlabeltocard("1",cardcreated,key,token);
  }
  else{
    Addlabeltocard("0",cardcreated,key,token);
  }
  // CREACION DE UPDATE DE CUSTOM FIELDS
  var arr = Create2DArray(2);
  arr[0][0] = "5c53200fc348ab7ac13488bb";
  arr[0][1] = "5c532017aa78c45fabead47e";
  arr[1][0] =omnia;
  arr[1][1] =estimacion;
  for (var j = 0; j < 2; j++) {
    var xhrd = new XMLHttpRequest();
    xhrd.open("PUT", "https://api.trello.com/1/card/" + cardcreated + "/customField/" + arr[0][j] + "/item?token=" + token + "&key=" + key,false);
    xhrd.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    if (arr[1][j]== null){
      arr[1][j]=" ";
    }
    var json3 = "{ \"value\": { \"text\": \"" + arr[1][j] + "\" }}";
    var json4 = "{ \"value\": { \"text\": \"" + " " + "\" }}";
    try{
    xhrd.send(json3);
    }
    catch
    {
    xhrd.send(json4);  
    }
}
    //window.close();
    OpenCard(shotvaltocard,key,token);
function OpenCard(shotvaltocard,key,token) {
  var e;
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`;
  ventana=window.open("https://trello.com/c/"+ shotvaltocard, params);

}
function Addlabeltocard(tipo,idcard,key,token){
  if (tipo==1){
    console.log(tipo);
   var idlabel="5b9f7530ace30b27fdfff84b";
  }
  else{
    console.log(tipo);
   var idlabel="5c58c5b30f74206283678232";
  }
  var data2 = {};
  var xhrf = new XMLHttpRequest();
  xhrf.open("POST", "https://api.trello.com/1/cards/"+idcard+"/idLabels", false);
  xhrf.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  data2.key = key;
  data2.token = token;
  data2.value = idlabel;
  var json2 = JSON.stringify(data2);
  xhrf.send(json2);}
  }

