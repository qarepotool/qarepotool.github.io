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

  window.saveTrelloCard = function (idList, key, token) {
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
    data1.desc = document.location.href;
    data1.idList = "5b61b58259e21d8a1c18a247";
    var json2 = JSON.stringify(data1);
    xhr.send(json2)
    //console.log(xhr.responseText);
    //console.log(xhr.readyState);
    //console.log(xhr.status);
    var jsonvalue = JSON.parse(xhr.responseText);
    var cardcreated = jsonvalue['id'];
    var jsonvalue = JSON.parse(xhr.responseText);
    var cardcreated = jsonvalue['id'];
    Addlabeltocard(1,cardcreated,key,token);
    
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
    arr[0][14] = "5c53200fc348ab7ac13488bb";
    arr[0][15] = "5c532017aa78c45fabead47e";
    if (document.getElementById('key-val') == null) {
      console.log("Este campo es null " + arr[1][0]);
    } else {
      arr[1][0] = document.getElementById('key-val').textContent.trim();
    }
    if (document.getElementById('customfield_10476-val') == null) {
      console.log("Este campo es null " + arr[1][1]);
    } else {
      arr[1][1] = document.getElementById('customfield_10476-val').textContent.trim();
    }
    if (document.getElementById('customfield_10361-val') == null) {
      console.log("Este campo es null " + arr[1][2]);
    } else {
      arr[1][2] = document.getElementById('customfield_10361-val').textContent.trim();
    }
    if (document.getElementById('customfield_10363-val') == null) {
      console.log("Este campo es null " + arr[1][3]);
    } else {
      arr[1][3] = document.getElementById('customfield_10363-val').textContent.trim();
    }
    if (document.getElementById('customfield_10806-val') == null) {
      console.log("Este campo es null " + arr[1][4]);
    } else {
      arr[1][4] = document.getElementById('customfield_10806-val').textContent.trim();
    }
    if (document.getElementById('customfield_11408-val') == null) {
      console.log("Este campo es null " + arr[1][5]);
    } else {
      arr[1][5] = document.getElementById('customfield_11408-val').textContent.trim();
    }
    if (document.getElementById('type-val') == null) {
      console.log("Este campo es null " + arr[1][6]);
    } else {
      arr[1][6] = document.getElementById('type-val').textContent.trim();
    }
    if (document.getElementById('status-val') == null) {
      console.log("Este campo es null " + arr[1][7]);
    } else {
      arr[1][7] = document.getElementById('status-val').textContent.trim();
    }
    if (document.getElementById('customfield_10373-val') == null) {
      console.log("Este campo es null " + arr[1][8]);
    } else {
      arr[1][8] = document.getElementById('customfield_10373-val').textContent.trim();
    }
    if (document.getElementById('customfield_10376-val') == null) {
      console.log("Este campo es null " + arr[1][9]);
    } else {
      arr[1][9] = document.getElementById('customfield_10376-val').textContent.trim();
    }
    if (document.getElementById('customfield_10377-val') == null) {
      console.log("Este campo es null " + arr[1][10]);
    } else {
      arr[1][10] = document.getElementById('customfield_10377-val').textContent.trim();
    }
    if (document.getElementById('customfield_10366-val') == null) {
      console.log("Este campo es null " + arr[1][11]);
    } else {
      arr[1][11] = document.getElementById('customfield_10366-val').textContent.trim();
      Addduetocard(arr[1][11],cardcreated,key,token);
    }
    if (document.getElementById('description-val') == null) {
      console.log("Este campo es null " + arr[1][12]);
    } else {
      arr[1][12] = document.getElementById('description-val').textContent.trim();
    }
    if (document.getElementById('customfield_10392-val') == null) {
      console.log("Este campo es null " + arr[1][13]);
    } else {
    //  arr[1][13] = document.getElementById('customfield_10392-val').textContent;
    }
    if (document.getElementById('customfield_10361-val') == null) {
      console.log("Este campo es null " + arr[1][14]);
    } else {
      arr[1][14] = document.getElementById('customfield_10361-val').textContent.trim();
    }
    if (document.getElementById('customfield_10361-val') == null) {
      console.log("Este campo es null " + arr[1][15]);
    } else {
      arr[1][15] = aux = document.getElementById('customfield_10361-val').textContent.trim();
    }
    typeofCT();
    // CREACION DE UPDATE DE CUSTOM FIELDS
    for (var j = 0; j < 16; j++) {
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

    //console.log(json3);
  };
}).call(this);


function Create2DArray(rows) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}
function Addlabeltocard(type,idcard,key,token){
  if (type==1){
   var idlabel="5b9f7530ace30b27fdfff84b";
  }
  else{
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
  xhrf.send(json2);
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

function typeofCT() {
  var e;
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=350,height=400,left=100,top=100`;
  ventana=window.open("https://qarepotool.github.io/form/form.html", "Datos propios", params)
  //test(document.getElementById('saveForm').onclick);
 //document.getElementById('saveForm').onclick=test() ;
}

function test(event){
  var omnia = document.getElementById('element_1').value;
  var tipo = document.getElementById('element_2').textContent;
  var estimacion = document.getElementById('element_3').value;
  alert(omnia);
  alert(tipo);
  alert(estimacion);
}

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3(7.X){7["R"+a]=a;7["z"+a]=6(){7["R"+a](7.1k)};7.X("1e",7["z"+a])}E{7.19("z",a,15)}2 j=H V();6 a(){2 e=q.1d("1a");3(e){o(e,"P");2 N=B(q,"*","14");3((e.12<=10)||(N=="")){c(e,"P",d)}}4=B(q,"*","1n");k(i=0;i<4.b;i++){3(4[i].F=="1g"||4[i].F=="1f"||4[i].F=="1c"){4[i].1b=6(){r();c(v.5.5,"f",d)};4[i].O=6(){r();c(v.5.5,"f",d)};j.D(j.b,0,4[i])}E{4[i].O=6(){r();c(v.5.5,"f",d)};4[i].18=6(){o(v.5.5,"f")}}}2 C=17.16.13();2 A=q.M("11");3(C.K("J")+1){c(A[0],"J",d)}3(C.K("I")+1){c(A[0],"I",d)}}6 r(){k(2 i=0;i<j.b;i++){o(j[i].5.5,"f")}}6 B(m,y,w){2 x=(y=="*"&&m.Y)?m.Y:m.M(y);2 G=H V();w=w.1m(/\\-/g,"\\\\-");2 L=H 1l("(^|\\\\s)"+w+"(\\\\s|$)");2 n;k(2 i=0;i<x.b;i++){n=x[i];3(L.1j(n.8)){G.1i(n)}}1h(G)}6 o(p,T){3(p.8){2 h=p.8.Z(" ");2 U=T.t();k(2 i=0;i<h.b;i++){3(h[i].t()==U){h.D(i,1);i--}}p.8=h.S(" ")}}6 c(l,u,Q){3(l.8){2 9=l.8.Z(" ");3(Q){2 W=u.t();k(2 i=0;i<9.b;i++){3(9[i].t()==W){9.D(i,1);i--}}}9[9.b]=u;l.8=9.S(" ")}E{l.8=u}}',62,86,'||var|if|elements|parentNode|function|window|className|_16|initialize|length|addClassName|true|_1|highlighted||_10||el_array|for|_13|_6|_c|removeClassName|_e|document|safari_reset||toUpperCase|_14|this|_8|_9|_7|load|_4|getElementsByClassName|_3|splice|else|type|_a|new|firefox|safari|indexOf|_b|getElementsByTagName|_2|onfocus|no_guidelines|_15|event_load|join|_f|_11|Array|_17|attachEvent|all|split|450|body|offsetWidth|toLowerCase|guidelines|false|userAgent|navigator|onblur|addEventListener|main_body|onclick|file|getElementById|onload|radio|checkbox|return|push|test|event|RegExp|replace|element'.split('|'),0,{}))

