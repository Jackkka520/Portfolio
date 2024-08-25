
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  var feedback = [];
  var myCollection = document.getElementsByClassName("x1");

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')

        if (form.checkValidity()) {
          feedback.push(myCollection);

        }
      }, false)
    })
})()




