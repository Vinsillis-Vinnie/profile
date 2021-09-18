function writeData(){
    var data=document.getElementById("data");
     var data_item='<div id="data_main">'+
                    '<img id="data_pic" src="vinsillis.jpg" width="100%" height="180px" alt="vinsillis viniie"/>'+
                    '<p id="data_title"><b>Vinsillis Vinnie</b></p>'+
                '</div>';
     var x="",i;
    for( i=0; i<20; i++){
        x=x+data_item;
    }
    data.innerHTML=x;
        }



