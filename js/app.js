var cantidad_digitos = 0;
var resultado = 0;
var punto_decimal = false;
var puso_signo_menos = false;
var cuenta = [];
var n = "";

 
//var entero = parseInt(text); // entero = 1234
//var decimal = parseFloat(text); // decimal = 1234.0987
    
document.getElementById("mas").addEventListener("click", function () {
    cantidad_digitos = 0;
    n = document.getElementById("display").innerHTML;
    cuenta.push(n, "+");
    document.getElementById("display").innerHTML = "0";
});
document.getElementById("menos").addEventListener("click", function () {
    cantidad_digitos = 0;
    n = document.getElementById("display").innerHTML;
    cuenta.push(n, "-");
    document.getElementById("display").innerHTML = "0";
});
document.getElementById("por").addEventListener("click", function () {
    cantidad_digitos = 0;
    n = document.getElementById("display").innerHTML;
    cuenta.push(n, "*");
    document.getElementById("display").innerHTML = "0";
});
document.getElementById("dividido").addEventListener("click", function () {
    cantidad_digitos = 0;
    n = document.getElementById("display").innerHTML
    cuenta.push(n, "/");
    document.getElementById("display").innerHTML = "0";
});

document.getElementById("igual").addEventListener("click", function () {
    operador1 = 0;
    operador2 = 0;
    operacion = "";
    resultado = 0;
    n = document.getElementById("display").innerHTML;
    cuenta.push(n, "=");
    alert("La operación es: " + cuenta[0] + cuenta[1] + cuenta[2] + cuenta[3]);
    if (cuenta.length > 3) {
        //Recorro el resto y coloco los resultados
        for (var i = 0; i < cuenta.length-1; i++) {
            //Es un operador
            if (typeof(cuenta[i]) == 'string') {
                // Es un operador
                switch (cuenta[i]) {
                    case "+":
                        operacion = "+";
                        break;
                    case "-":
                        operacion = "-";
                        break;
                    case "*":
                        operacion = "*";
                        break;
                    case "/":
                        operacion = "/";
                        break;
                }
            }  
            
            // Es un número
            if (typeof(parseFloat(cuenta[i])) == 'number') { 
               
                if (operador1 == 0 && operador2 == 0) {
                    operador1 = parseFloat(cuenta[i]);
                    operador2 = 0; 
                     alert("Cargo Operador1 = " + operador1 + " Posición: " + i);
                } else {
                        operador2 = parseFloat(cuenta[i]);
                        alert("Cargo Operador2 = " + operador2 + " Posición: " + i);
                    }
                }
                
                if (operador1 > 0 && operador2 > 0) {
                    // Hago cuenta parcial
                    switch (operacion){
                        case "+":
                            resultado = operador1 + operador2;
                            cuenta.push(resultado);
                            break;
                        case "-":
                            resultado = operador1 - operador2;
                            cuenta.push(resultado);
                            break;
                        case "*":
                            resultado = operador1 * operador2;
                            cuenta.push(resultado);
                            break;
                        case "/":
                            resultado = operador1 / operador2;
                            cuenta.push(resultado);
                            break;
                        case "=":    

                    }
                    
                }
        }
                        
                    
    }
        
    
    alert("Resultado: " + resultado + " - Cuenta: " + cuenta[0] + cuenta[1] + cuenta[2] + cuenta[3]);
    document.getElementById("display").innerHTML = resultado;
    punto_decimal = false;     
                                           
});


    
        

document.getElementById("sign").addEventListener("click", function () {   
    sin_signo = "";    
    if (document.getElementById("display").innerHTML != "0"){
        if (document.getElementById("display").innerHTML[0] != "-" ){
            document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML; 
        } else {
            sin_signo = document.getElementById("display").innerHTML;
            sin_signo = sin_signo.substring(1); 
            document.getElementById("display").innerHTML = sin_signo; 
    }
   }
});

document.getElementById("punto").addEventListener("click", function () {
   if (!punto_decimal){
    punto_decimal = true;
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "."; 
    }
});

document.getElementById("on").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "0";
    cantidad_digitos = 0;
    punto_decimal = false;
    ultimo_operador = "";
    resultado_parcial=0;
    cuenta_realizada = false;
    primera_entrada = false;
});

document.getElementById("0").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
        cantidad_digitos = cantidad_digitos + 1;
    }    
});
document.getElementById("1").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "1";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("2").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "2";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("3").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "3";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("4").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "4";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("5").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "5";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
});
document.getElementById("6").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "6";
        cantidad_digitos = cantidad_digitos + 1;
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
            cantidad_digitos = cantidad_digitos + 1;
        } 
    }    
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

