let currentStep = 1;

function showStep() {
  document.querySelectorAll('.step').forEach(function (element) {
    element.classList.remove('active');
  });

  document.querySelector(`#step${currentStep}`).classList.add('active');
  document.querySelector('#currentStep').textContent = currentStep;
}

function nextStep() {
  if (currentStep < 3) {
    currentStep++;
    showStep();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep();
  }
}

const wizardForm = document.querySelector('#wizard-form');

wizardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = wizardForm.elements.email.value;
  const username = wizardForm.elements.username.value;
  const password = wizardForm.elements.password.value;

  alert(`Registration complete! Your details: \n 
  Email: ${email} \n 
  Username: ${username} \n
  Password: ${password}`);

  wizardForm.reset();
  currentStep = 1;
  showStep();
});
