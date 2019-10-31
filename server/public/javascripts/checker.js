function checkAndSubmit() {

    if(document.getElementById("pass").value==document.getElementById("repass").value){
        document.getElementById("regform").submit();
    }else if(document.getElementById("repass").value!==""){
        document.getElementById("passerr").hidden=false;
    }
}