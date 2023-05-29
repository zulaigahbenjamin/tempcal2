let userInput = prompt("would you like to convert to c or f?")
let userTemp = prompt("enter the temperature?")

userInput = userInput.toLowerCase();

let result;

if (userInput == 'c') {
  result = (userTemp - 32) * 5 / 9
} else {
  result = (userTemp * 9 / 5) + 32
}

document.write(result)


// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
   let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
   return fahrenheit
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fah - 32) * 5 / 9).toFixed(2);
    return celsius;
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (valueTemp.toLowerCase() === "cel") {
    document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
  } else if (valueTemp.toLowerCase() === "fah") {
    document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
  } else {
    alert("Invalid conversion type.");
  }


