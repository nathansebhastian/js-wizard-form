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
    showStep()
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep()
  }
}
