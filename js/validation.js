// Prevent not number inputs and exceeding max length on input type number.
(function () {
        const numberInputs = document.querySelectorAll("input[type=number]");
        for(input of numberInputs){
            input.addEventListener("input", event => {
                input = event.target;
                if(input.value.length > input.maxLength)
                    input.value = input.value.slice(0, input.maxLength);
            });

            input.addEventListener("keypress", event => {
                if(isNaN(event.key))
                    event.preventDefault();
            });
        }
    }
)();


// Validation for specific scenario form
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()