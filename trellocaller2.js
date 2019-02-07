function evaluatevalues(event){
    if (document.getElementById('element_2').value == "") {
     alert ("Tipo de entrega no informado");
   } 
   else {
     type_delivery=document.getElementById('element_2').value;
     console.log("Type of delivery: " + type_delivery);
     taskID=document.getElementById('element_1').value;
     console.log("taskID: " + taskID);
     getJIRAinfo()
     

   //  createtrello();
   //  window.close(); 
   }
function getJIRAinfo(){
    CTvalorhidden=document.getElementById('CTfield').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jira.euipoqaportal.eu/jira/rest/api/2/issue/"+CTvalorhidden, false);
    xhr.setRequestHeader("Content-Type", "application/xml;charset=UTF-8");
    xhr.send()
    //console.log(xhr.responseText);
    //console.log(xhr.readyState);
    //console.log(xhr.status);
    var jsonvalue = JSON.parse(xhr.responseText);
    var controltable = jsonvalue['key'];
    var Application = jsonvalue['fields']['customfield_10476']['value'];
    var Version	= jsonvalue['fields']['customfield_10361'];	
    var RC= jsonvalue['fields']['customfield_10363'];			
    var Clarity	= jsonvalue['fields']['customfield_10806'];	
    var Business= jsonvalue['fields']['customfield_11408'];
    var Type= jsonvalue['fields']['type']['name'];		
    var Status= jsonvalue['fields']['status']['name'];		
    var PM = jsonvalue['fields']['customfield_10373']['displayName'];	
    var Planneddel = jsonvalue['fields']['customfield_10476'];	
    var PlannedUAT= jsonvalue['fields']['customfield_10377'];	
    var PlannedGL= jsonvalue['fields']['customfield_10366'];	
    var Description = jsonvalue['fields']['description'];
    var Folder	= jsonvalue['fields']['customfield_10392']['value'];	
    console.log("controltable :" + controltable );
    console.log("Application  :" + Application  );
    console.log("Version	  :" + Version	    );
    console.log("RC           :" + RC           );
    console.log("Clarity	  :" + Clarity	    );
    console.log("Business     :" + Business     );
    console.log("Type	      :" + Type	        );
    console.log("Status       :" + Status       );
    console.log("PM           :" + PM           );
    console.log("Planneddel   :" + Planneddel   );
    console.log("PlannedUAT   :" + PlannedUAT   );
    console.log("PlannedGL    :" + PlannedGL    );
    console.log("Description  :" + Description  );
    console.log("Folder       :" + Folder       );
}

}