var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Anda kekurangan berat badan";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Berat badan Anda normal (ideal) ";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Anda memiliki berat badan berlebih";
    }else{
        statement.innerText = "Berat badan Anda sangat berlebih (obesitas)";
    }
});
