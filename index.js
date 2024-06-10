// Function to update calculation and log it
function updateCalculation(value) {
calculation +=value;
document.getElementById("Calculation-display").innerText= calculation;
console.log(calculation);
 }
}  
// Calculate the result
function calculateResult (){
try{
calculation = eval(calculation);
calculation = Math.round(calculation *100) / 100; // Round to two decimal places
document.getElementById("result-display").textcontent = calculation;
console.log(calculation);
} catch (error){
 document.getElementById("result-display"). innerText= "Error";
 calculation= "" ;
 console.log (calculation);
   }
}
// Clear the display
function clearDisplay (){
calculation= "";
document.getElementById(calculation-display"). innerText ="";
document.getElementById("result-display"). textcontent ="0";
console.log(calculation);
}
// Function to delete last character
function deleteLastCharacter () {
document.getElementById("result-display").innerText= "0";
document.getElementById("calculation-display").innerText=calculation
}

function add (a,b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
  }

  function multiply ( a, b){
    return a * b;
  }

  function divide (a, b) {
    if (b===0){
      throw new Error ("Division by zero is not allowed. ");
    }
    return a / b;
    }
  