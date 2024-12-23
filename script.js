// here this is a form we need to select form completely.
const form = document.querySelector('form')
// whenever form get submitted they go to the server . we have to stop it. we have to stop the default action of form.
// this usecase will give you empty value.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const conclusion = document.querySelector("#conclusion")

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid heights";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weights";
    }
    else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    //    show the result
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
        conclusion.innerHTML = "Under weight"
    }else if(bmi >= 18.6 && bmi <= 24.9){
        conclusion.innerHTML = "Normal range";
    }else if(bmi > 24.9){
        conclusion.innerHTML = "Over weight";
    }
    }

    
});

