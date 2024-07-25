const metersInput = document.getElementById("meters");
const feetInput = document.getElementById("foot");
const convertToMeters = document.getElementById("convertToMeters");
const convertToFeet = document.getElementById("conertToFeet");
const clear = document.getElementById("clear");


convertToFeet.addEventListener("click", function(){
    const meters = parseFloat(metersInput.value);

    if(!isNaN(meters)){
        const feet = meters * 3.28084;
        feetInput.value = feet.toFixed(2);
    }else {
        alert("por favor ingresa un numero valido")
    }
})

convertToMeters.addEventListener("click", function(){
    const feet = parseFloat(feetInput.value);

    if(!isNaN(isNaN)){
        const meters = feet / 3.28084;
        metersInput.value = meters.toFixed(2);
    }else {
        alert("por favor ingresa un numero valido")
    }
})

clear.addEventListener("click", function(){
    feetInput.value = "";
    metersInput.value = "";
})

