
function merge()
{
    latime=document.getElementById("latime").value
    inaltime=document.getElementById("inaltime").value
    raza=document.getElementById("raza").value
    sfera=document.getElementById("sfera").value



    aria=latime*inaltime
    document.getElementById("rezultatA").innerHTML=aria;
    ariaC=Math.pow(raza,2)*Math.PI;
    document.getElementById("rezultatC").innerHTML=ariaC;
    sferaA=Math.pow(sfera,4/3)*Math.PI;
    document.getElementById("RezultatB").innerHTML=sferaA;
}