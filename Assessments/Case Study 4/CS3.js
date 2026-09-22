function chkEmail(){
    var inputEmail=document.getElementById("JobEmail");
    var checkEmail = inputEmail.value;
    const exp=/^[\w.-]+@(\w+\.){1,3}\w{2,3}$/;
    if (!exp.test(checkEmail)){
        alert('Your email is not correct');
        inputEmail.focus();
        inputEmail.select();
        return false;
    }
else return true;

}