var cantidad_digitos = 0;
var resultado_parcial = 0;
var numero_antes_igual=0;
var nro_veces_igual=0;
var no_sumar = false;
var ultimo_operando = 0;
var punto_decimal = false;
var puso_signo_menos = false;
var operador_suma = false;
var operador_resta = false;
var operador_produto = false;
var operador_division = false;
var ultimo_operador = "";
var operador_antes_igual = "";
 
//var entero = parseInt(text); // entero = 1234
//var decimal = parseFloat(text); // decimal = 1234.0987
    
document.getElementById("mas").addEventListener("click", function () {
    ultimo_operador = "+";
    cantidad_digitos = 0;
    nro_veces_igual = 0;
    //cargo operando1
    if (resultado_parcial == 0 && document.getElementById("display").innerHTML !=0) {
       resultado_parcial = parseFloat(document.getElementById("display").innerHTML); 
       document.getElementById("display").innerHTML = "0";        
    //cargo operando2    
    } else {
        if (resultado_parcial != 0 && document.getElementById("display").innerHTML != "0"){
            //Hago cuenta
            resultado_parcial = resultado_parcial + parseFloat(document.getElementById("display").innerHTML);   
            document.getElementById("display").innerHTML = "0";
            
        }
    }
    
});

document.getElementById("igual").addEventListener("click", function () {
        
        if (nro_veces_igual == 0) {
            numero_antes_igual = parseFloat(document.getElementById("display").innerHTML);
            nro_veces_igual = 1;
        } else {
            nro_veces_igual = nro_veces_igual + 1;
        }
        switch (ultimo_operador){
            case "+":
                if (no_sumar) {
                    if (nro_veces_igual == 1) {
                        resultado_parcial = resultado_parcial + parseFloat(document.getElementById("display").innerHTML);
                        sumo_signo_mas=true;
                    } else {
                        resultado_parcial = resultado_parcial + numero_antes_igual;
                        sumo_signo_igual=true;
                    }
                }
                break;
            case "-":    
                if (nro_veces_igual == 1){
                    resultado_parcial = resultado_parcial - parseFloat(document.getElementById("display").innerHTML);
                } else {
                    resultado_parcial = resultado_parcial - numero_antes_igual;
                }
                break;
            case "*":    
                if (nro_veces_igual == 1){
                    resultado_parcial = resultado_parcial * parseFloat(document.getElementById("display").innerHTML);
                } else {
                    resultado_parcial = resultado_parcial * numero_antes_igual;
                }
                break;
            case "/":    
                if (nro_veces_igual == 1){
                    resultado_parcial = resultado_parcial / parseFloat(document.getElementById("display").innerHTML);
                } else {
                    resultado_parcial = resultado_parcial / numero_antes_igual;
                }
                break;    
             
            } 
        document.getElementById("display").innerHTML = resultado_parcial;
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

