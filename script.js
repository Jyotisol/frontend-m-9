function ValidateEmail(){
    const emailInput = document.getElementById('email');
    const errorData = document.querySelector('#danger');
    const invalidMag = document.querySelector('.invalid-mag');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(!emailPattern.test(emailInput.value)){
    console.log("done");
    errorData.style.display = "block";
    invalidMag.style.display = "block";
    return ture;
   }
   errorData.style.display = "none";
    invalidMag.style.display = "none";
    console.log("fake");
    return false;
}