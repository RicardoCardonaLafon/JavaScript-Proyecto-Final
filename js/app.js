var cantidad_digitos = 0;
var resultado = 0;
var punto_decimal = false;
var puso_signo_menos = false;
var cuenta = ["","","","","","",""];
var n = "";
var operadores = 1;
var hay_resultado = false;
var ultimo_operador = "";
var ultimo_operando = 0;


function representacion_visor(nro){
    resultado_txt = resultado;
    resultado_txt = resultado_txt.toString();
    // Debo asegurarme de colocar 8 digitos mas los simbolos
    if (resultado < 0) {
        es_negativo = true;
    }
    if (resultado != parseInt(resultado)) {
        es_decimal = true;;
    }
       
    if (resultado_txt.length > 8) {
        if (es_negativo && es_decimal) {
            if (resultado_txt.length > 9) {
                resultado_txt = resultado_txt.substr(0,10);
                resultado = parseFloat(resultado_txt);
            } else {
                resultado_txt = resultado_txt.substr(0,9);
                resultado = parseFloat(resultado_txt);
            }
        } else {
            if (es_negativo){
                resultado_txt = resultado_txt.substr(0,9);
                resultado = parseFloat(resultado_txt);
            } else {
                if (es_decimal){
                    resultado_txt = resultado_txt.substr(0,9);
                    resultado = parseFloat(resultado_txt);
                } else {
                    // Es un entero no decimal
                    resultado_txt = resultado_txt.substr(0,8);
                    resultado = parseFloat(resultado_txt);
                }    
            }
        }
    }
    return resultado;
}
//var entero = parseInt(text); // entero = 1234
//var decimal = parseFloat(text); // decimal = 1234.0987
function calcular_resultado(){
    op = "";
    resultado = 0;
    resultado_txt ="";
    es_negativo = false;
    es_decimal = false;
    //Si la cuenta es = almaceno ultimo_operador y ultimo_operando
    if (cuenta[5] == "" && cuenta[6] == "") {
        cuenta[5] = cuenta[1];
        cuenta[6] = parseFloat(cuenta[2]);
    } 
    switch (cuenta[1]){
        case "+":
            resultado = parseFloat(cuenta[0]) + parseFloat(cuenta[2]);
            break;
        case "-":
            resultado = parseFloat(cuenta[0]) - parseFloat(cuenta[2]);
            break;
        case "*":
            resultado = parseFloat(cuenta[0]) * parseFloat(cuenta[2]);
            break;
        case "/":
            if (parseFloat(cuenta[2]) != 0){
                resultado = parseFloat(cuenta[0]) / parseFloat(cuenta[2]);
            }    
            break;   
    }
    
    resultado = representacion_visor(resultado);
    
    
    op = cuenta[3];
    cuenta[0] = "";
    cuenta[1] = "";
    cuenta[2] = "";
    cuenta[3] = "";
    cuenta[4] = "x";
    
    if (op == "="){
        cuenta[0] = resultado;                           
    } else {
        cuenta[0] = resultado;   
        cuenta[1] = op; 
    }
    document.getElementById("display").innerHTML = resultado;
    punto_decimal = false;     
    operadores = 1;
    hay_resultado = true;
    return resultado;

    
}
//Fin de la funcion
    
document.getElementById("mas").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "+";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[2] == "" && cuenta[4] == "") {
                cuenta[2] = s;
                cuenta[1] = "+"; 
                cuenta[3] = "=";
                document.getElementById("display").innerHTML = calcular_resultado();
                punto_decimal = false;     
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                if (cuenta[0] != "" && cuenta[1] == "" && cuenta[4] == "x"){
                    //Resultado de signo igual!
                    document.getElementById("display").innerHTML = "0";
                    cuenta[4] == ""
                    cuenta[0] = s;
                    cuenta[1] = "+";
                } else {
                document.getElementById("display").innerHTML = "0";
                cuenta[4] == ""
                }
            }
        }
        
    }
      
});
document.getElementById("menos").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "-";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[2] == "" && cuenta[4] == "") {
                cuenta[2] = s;
                cuenta[1] = "-"; 
                cuenta[3] = "=";
                document.getElementById("display").innerHTML = calcular_resultado();
                punto_decimal = false;     
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                if (cuenta[0] != "" && cuenta[1] == "" && cuenta[4] == "x"){
                    //Resultado de signo igual!
                    document.getElementById("display").innerHTML = "0";
                    cuenta[4] == ""
                    cuenta[0] = s;
                    cuenta[1] = "-";
                } else {
                document.getElementById("display").innerHTML = "0";
                cuenta[4] == ""
                }
            }
        }
        
    }
});
document.getElementById("por").addEventListener("click", function () {
   if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "*";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[2] == "" && cuenta[4] == "") {
                cuenta[2] = s;
                cuenta[1] = "*"; 
                cuenta[3] = "=";
                document.getElementById("display").innerHTML = calcular_resultado();
                punto_decimal = false;     
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                if (cuenta[0] != "" && cuenta[1] == "" && cuenta[4] == "x"){
                    //Resultado de signo igual!
                    document.getElementById("display").innerHTML = "0";
                    cuenta[4] == ""
                    cuenta[0] = s;
                    cuenta[1] = "*";
                } else {
                document.getElementById("display").innerHTML = "0";
                cuenta[4] == ""
                }
            }
        }
        
    }
});
document.getElementById("dividido").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML != "0"){
        cantidad_digitos = 0;
        cuenta[5] = "";
        cuenta[6] = "";
        s = document.getElementById("display").innerHTML;
        if (cuenta[0] == ""){
            cuenta[0] = s;
            cuenta[1] = "/";
            document.getElementById("display").innerHTML = "0";
        } else { 
            if (cuenta[2] == "" && cuenta[4] == "") {
                cuenta[2] = s;
                cuenta[1] = "/"; 
                cuenta[3] = "=";
                document.getElementById("display").innerHTML = calcular_resultado();
                punto_decimal = false;     
                operadores = 1;
                hay_resultado = true;
                ultimo_operador = 0;
                ultimo_operando = 0;
            } else {
                if (cuenta[0] != "" && cuenta[1] == "" && cuenta[4] == "x"){
                    //Resultado de signo igual!
                    document.getElementById("display").innerHTML = "0";
                    cuenta[4] == ""
                    cuenta[0] = s;
                    cuenta[1] = "/";
                } else {
                document.getElementById("display").innerHTML = "0";
                cuenta[4] == ""
                }
            }
        }
        
    }
});

document.getElementById("igual").addEventListener("click", function () { 
    if (document.getElementById("display").innerHTML != "0") {
        n = document.getElementById("display").innerHTML;
        resultado_txt = "";
        if (cuenta[0] != "" && cuenta[1] != "") {
                //Coloco el resto de la cuenta
                switch (cuenta[1]) {
                    case "+":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();
                        punto_decimal = false;     
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "-":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();
                        punto_decimal = false;     
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "*":
                        cuenta[2] = parseFloat(n);
                        cuenta[3] = "=";
                        document.getElementById("display").innerHTML = calcular_resultado();
                        punto_decimal = false;     
                        operadores = 1;
                        hay_resultado = true;
                        break;
                    case "/":
                        if (parseFloat(n) != 0){
                            cuenta[2] = parseFloat(n);
                            cuenta[3] = "=";
                            document.getElementById("display").innerHTML = calcular_resultado();
                            punto_decimal = false;     
                            operadores = 1;
                            hay_resultado = true;
                        }    
                        break;    
                } 

        } else {  
            if (cuenta[5] != "" && cuenta[6] != "") {
                switch (cuenta[5]) {
                    case "+":    
                        cuenta[0] = parseFloat(cuenta[0]) + parseFloat(cuenta[6]);    
                        break;
                    case "-":
                        cuenta[0] = parseFloat(cuenta[0]) - parseFloat(cuenta[6]);   
                        break;
                    case "*":
                        cuenta[0] = parseFloat(cuenta[0]) * parseFloat(cuenta[6]);    
                        break;
                    case "/":
                        if (parseFloat(cuenta[6]) > 0){
                            cuenta[0] = parseFloat(cuenta[0]) / parseFloat(cuenta[6]);    
                        }    
                        break;    
                }
                resultado = parseFloat(cuenta[0]);
                resultado = representacion_visor(resultado);
                cuenta[1] = "";
                cuenta[2] = "=";
                cuenta[3] = "=";
                cuenta[4] = "x";
                document.getElementById("display").innerHTML = resultado;
                punto_decimal = false;     
                operadores = 1;
                hay_resultado = true;
            }
             
        }
       
        
        
    }
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
    hay_resultado_signo_igual = false;
    cuenta.length = 0;
    cuenta[0] = "";
    cuenta[1] = "";
    cuenta[2] = "";
    cuenta[3] = "";
    cuenta[4] = "";
    cuenta[5] = "";
    cuenta[6] = "";
    n = "";
    hay_resultado = false;
});

document.getElementById("0").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
        cuenta[4] = "";
        cantidad_digitos = cantidad_digitos + 1;
    }    
});
document.getElementById("1").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "1";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
        
    }    
});
document.getElementById("2").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "2";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("3").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "3";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
       
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("4").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "4";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("5").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "5";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("6").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "6";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});

document.getElementById("7").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "7";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("8").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "8";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});
document.getElementById("9").addEventListener("click", function () {
    if (document.getElementById("display").innerHTML == "0" && cantidad_digitos == 0) {
        document.getElementById("display").innerHTML = "9";
        cantidad_digitos = cantidad_digitos + 1;
        cuenta[4] = "";
    } else {
        if (document.getElementById("display").innerHTML != "0" && cantidad_digitos < 8) {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
            cantidad_digitos = cantidad_digitos + 1;
            cuenta[4] = "";
        } 
    }    
});

