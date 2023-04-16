const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
});

// console.log(currentStep);
if(currentStep < 0){
    currentStep = 0;
    showCurrentStep();
    // formSteps[currentStep].classList.add('active');
}

multiStepForm.addEventListener('click', e => {
    let incrementor
    if(e.target.matches("[data-next]"))
    {
        // currentStep += 1;
        incrementor = 1;
    }else if(e.target.matches("[data-previous]"))
    {
        // currentStep -= 1;
        incrementor = -1
    }
    // else{
    //     return 
    // }

    if(incrementor == null) return

    const inputs = [...formSteps[currentStep].querySelectorAll('input')];
    // console.log("fhjdhfj")
    const allValid = inputs.every(input => input.reportValidity());
    // console.log("input of current form", inputs)
    // confirm(allValid);
    if(allValid){
        currentStep += incrementor;
        showCurrentStep();
    }

});


function showCurrentStep(){
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });  
}
