var fechaSis=new Date ();
var hora=fechaSis.getHours();


if(hora<12){
    alert("BUENOS DIAS  BIENVENID@");
}
else{
    if(hora<18){
        alert("BUENAS TARDES BIENVENID@");
    }
    else{
        alert("BUENAS NOCHES BIENVENID@");
    }
}
