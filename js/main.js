// onResize funtion adapted from https://stackoverflow.com/questions/14735274/bootstrap-css-hides-portion-of-container-below-navbar-navbar-fixed-top

var onResize = function() {
    $("body").css("padding-top", ($(".fixed-top").height() - 20));
  };

  $(window).resize(onResize);

  $(function() {
    onResize();
  });


  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

            const fname = $("#fnameInput").val();
            const lname = $("#lnameInput").val();
            const email = $("#emailInput").val();

            console.log(fname, lname, email);

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
