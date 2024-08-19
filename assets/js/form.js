//bootstrap form
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
//to make sure dates are accurate from today and on
document.addEventListener("DOMContentLoaded", function() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('validationCustom04').setAttribute('min', today);
  });
  // to show a modal after submition!
  (function () {
    'use strict';
    var form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            var confirmationModal = new bootstrap.Modal(document.querySelector('.modal'));
            confirmationModal.show();
            var saveChangesBtn = document.querySelector('.save');
            saveChangesBtn.addEventListener('click', function() {
                location.reload();
            });
        }
  form.classList.add('was-validated');
    }, false);
})();  
