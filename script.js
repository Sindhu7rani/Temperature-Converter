function convertToCelsius() {
    // Get the input value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Please enter a valid number for Celsius.";
        return;
    }

    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById("result").innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}

function convertToKelvin() {
    // Get the input value
    var kelvin = parseFloat(document.getElementById("kelvin").value);

    // Check if the input is a valid number
    if (isNaN(kelvin)) {
        document.getElementById("result").innerHTML = "Please enter a valid number for Kelvin.";
        return;
    }

    // Convert Kelvin to Celsius
    var celsius = kelvin - 273.15;

    // Display the result
    document.getElementById("result").innerHTML = kelvin + "K is " + celsius.toFixed(2) + "°C";
}