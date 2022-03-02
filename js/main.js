// onResize funtion adapted from https://stackoverflow.com/questions/14735274/bootstrap-css-hides-portion-of-container-below-navbar-navbar-fixed-top

var onResize = function() {
    $("body").css("padding-top", ($(".fixed-top").height() - 20));
  };


  $(window).resize(onResize);

  $(function() {
    onResize();
  });


  // Form validation adapted from https://dev.to/javascriptacademy/form-validation-using-javascript-34je
  
  const form = document.getElementById("form");

 
  form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

  });

  const setError = (element, message) =>{
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    document.getElementById("phoneHelp").hidden = true;
    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
  }

  const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');
    
    errorDisplay.innerText = "";
    formGroup.classList.add("success");
    formGroup.classList.remove("error");
  }

  const validateInputs = () => {
    const fname = $("#fnameInput").val();
    const lname = $("#lnameInput").val();
    const email = $("#emailInput").val();
    const cardNum = $("#cardNumber").val();
    const cardCVV = $("#CVVNumber").val();
    const cardExp = $("#expiryDate").val();
    const phoneNum = $("#phoneInput").val();

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const cc = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    const cc_date = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;


    if(fname === ""){
      setError(fnameInput, "First name is required");
    }else{
      setSuccess(fnameInput)
    }

    if(lname === ""){
      setError(lnameInput, "Last name is required");
    }else{
      setSuccess(lnameInput)
    }

    if(email === ""){
      setError(emailInput, "Email is required");
      document.getElementById("emailHelp").hidden = true;
    }else if(re.test(String(email).toLowerCase()) === false){
      setError(emailInput, "Email is not in correct format.");
      document.getElementById("emailHelp").hidden = true;
    }else{
      setSuccess(emailInput);
      document.getElementById("emailHelp").hidden = false;
    }

    if(phoneNum === ""|| isNaN(phoneNum) === true){
      document.getElementById("phoneHelp").hidden = true;
      setError(phoneInput, "Phone number is required");
    }else{
      setSuccess(phoneInput)
      document.getElementById("phoneHelp").hidden = false;
    }

    if(cardNum === ""){
      setError(cardNumber, "Card number is required");
    }else if(cc.test(cardNum) === false){
      setError(cardNumber, "This is not a valid Credit Card")
    }else{
      setSuccess(cardNumber)
    }

    if(cardCVV === "" || isNaN(cardCVV) === true){
      setError(CVVNumber, "Enter a valid CVV");
    }else{
      setSuccess(CVVNumber)
    }

    if(cardExp === "" || cc_date.test(cardExp) === false){
      setError(expiryDate, "Enter valid expiry date");
    }else{
      setSuccess(expiryDate)
    }


  };