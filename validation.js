function validation(){
    var email= document.getElementById("t1").value;
    var fname= document.getElementById("t2").value;
    var lname= document.getElementById("t3").value;
    var isValid = true;

    if(email==""){
        document.getElementById("email1").innerHTML="Email name is required";
        isValid=false;
    }
    else
        document.getElementById("email1").innerHTML="";

    if(fname==""){
        document.getElementById("fname1").innerHTML="First name is required";
        isValid=false;
    }
    else
        document.getElementById("fname1").innerHTML="";

    if(lname==""){
        document.getElementById("lname1").innerHTML="Last name is required";
        isValid=false;
    }
    else
        document.getElementById("lname1").innerHTML="";

    if(isValid == true)
        document.getElementById("f1").submit();
    
}