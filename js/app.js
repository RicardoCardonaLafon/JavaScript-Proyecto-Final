var cantidad_digitos = 0
document.getElementById("on").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
    document.getElementById("display").innerHTML = "0";
    cantidad_digitos = 0;
});

document.getElementById("7").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "7";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("8").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "8";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("9").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "9";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});

