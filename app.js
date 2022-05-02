import { asigdia1,asigdia2 } from "./asigdia.js";
import { si,no,mismodia,diaanterior,mas1 } from "./errores.js";

document.addEventListener("submit",(e) => {
    
    e.preventDefault();
    const $root = document.getElementById("root"),
          $last = $root.lastChild;

    $root.removeChild($root.lastChild);
    $root.removeChild($root.lastChild);
    tomadatos();
        
        


})


export function tomadatos () {
    let x = document.getElementById("inicio").value,
        k  = document.getElementById("final").value,
        fecha_inicio = x.split('-'),
        fecha_final = k.split('-'),
        dia_inicio = parseInt(fecha_inicio[2],0),
        mes_inicio = parseInt(fecha_inicio[1],0),
        ano_inicio = parseInt(fecha_inicio[0],0),
        dia_final = parseInt(fecha_final[2],0),
        mes_final = parseInt(fecha_final[1],0),
        ano_final = parseInt(fecha_final[0],0),
        aux1 = ano_inicio - 2020,
        aux2 = ano_final - 2020,
        lista_turno = document.getElementById('turno'),
        no_turno = turno.value;

    console.log(no_turno);

if (no_turno == 2) {//restar dos dias si es de nche para empezar en lunes
        dia_inicio = dia_inicio - 2;
        //console.log("turno nocturno menos dos dias");
   }


console.log(x);


hello(
fecha_inicio,
fecha_final,
mes_inicio,
ano_inicio,
dia_final,
mes_final,
ano_final,
aux1,
aux2,
dia_inicio,
no_turno)
}

 function hello (fecha_inicio,
    fecha_final,
    mes_inicio,
    ano_inicio,
    dia_final,
    mes_final,
    ano_final,
    aux1,
    aux2,
    dia_inicio,
    no_turno) {

    let mes,
        dia,
        otro=1,
        $root = document.getElementById("root");

//mensajes
function trabajas() {
    setTimeout (function (){
        $root.appendChild(si())
        },400)
}

function no_trabajas() {
    setTimeout (function (){
        $root.appendChild(no())
        },400)
}

function mismodi () {
    setTimeout (function (){
        $root.appendChild(mismodia())
        },400)
}

function diaanterio () {
    setTimeout (function (){
        $root.appendChild(diaanterior())
        },400)
}

function mas (){
    setTimeout (function (){
        $root.appendChild(mas1())
        },400)
}

function manana (otro) {
    console.log("turno manana");
    const $h1 = document.createElement("h1");
    
    $h1.innerHTML = '<h1> Estarás en el Turno Mañana </h1>';
    $h1.classList.add("turno");
    
    setTimeout (function (){
        $root.appendChild($h1)
        },400)

    switch (otro){
        case 0: trabajas();
        break;
        case 1: trabajas();
        break;
        case 2: trabajas();
        break;
        case 3: trabajas();
        break;
        case 4: no_trabajas();
        break; 
        case 5: no_trabajas();
        break;
        case 6: no_trabajas();
        break;
        case 7: trabajas();
        break;
        case 8: trabajas();
        break;
        case 9: trabajas();
        break;
        case 10: trabajas();
        break;
        case 11: no_trabajas();
        break;
        case 12: no_trabajas();
        break; 
        case 13: no_trabajas();
        break;
        case 14: trabajas();
        break;
        case 15: trabajas();
        break;
        case 16: trabajas();
        break;
        case 17: trabajas();
        break;
        case 18: no_trabajas();
        break;
        case 19: no_trabajas();
        break;
        case 20: no_trabajas();
        break; 
        case 21: trabajas();
        break;
        case 22: trabajas();
        break;
        case 23: trabajas();
        break;
        case 24: trabajas();
        break;
        case 25: no_trabajas();
        break;
        case 26: no_trabajas();
        break;
        case 27: no_trabajas();
        break;
    }
}

function noche(otro) {
    console.log("turno noche");
    const $h1 = document.createElement("h1");
    
    $h1.innerHTML = '<h1> Estarás en el Turno Noche </h1>';
    $h1.classList.add("turno");
    
    setTimeout (function (){
        $root.appendChild($h1)
        },400)

    switch (otro){
        case 0: no_trabajas();
        break;
        case 1: no_trabajas();
        break;
        case 2: trabajas();
        break;
        case 3: trabajas();
        break;
        case 4: trabajas();
        break; 
        case 5: trabajas();
        break;
        case 6: no_trabajas();
        break;
        case 7: no_trabajas();
        break;
        case 8: no_trabajas();
        break;
        case 9: trabajas();
        break;
        case 10: trabajas();
        break;
        case 11: trabajas();
        break;
        case 12: trabajas();
        break; 
        case 13: no_trabajas();
        break;
        case 14: no_trabajas();
        break;
        case 15: no_trabajas();
        break;
        case 16: trabajas();
        break;
        case 17: trabajas();
        break;
        case 18: trabajas();
        break;
        case 19: trabajas();
        break;
        case 20: no_trabajas();
        break; 
        case 21: no_trabajas();
        break;
        case 22: no_trabajas();
        break;
        case 23: trabajas();
        break;
        case 24: trabajas();
        break;
        case 25: trabajas();
        break;
        case 26: trabajas();
        break;
        case 27: no_trabajas();
        break;
    }
}

function mixto(otro) {
    console.log("turno mixto");

    const $h1 = document.createElement("h1");
    
    $h1.innerHTML = '<h1> Estarás en el Turno Mixto</h1>';
    $h1.classList.add("turno");
    
    setTimeout (function (){
        $root.appendChild($h1)
        },400)

    switch (otro){
        case 0: trabajas();
        break;
        case 1: trabajas();
        break;
        case 2: no_trabajas();
        break;
        case 3: no_trabajas();
        break;
        case 4: trabajas();
        break;
        case 5: trabajas();
        break;
        case 6: no_trabajas();
        break;
        case 7: trabajas();
        break;
        case 8: trabajas();
        break;
        case 9: no_trabajas();
        break;
        case 10: no_trabajas();
        break;
        case 11: trabajas();
        break;
        case 12: trabajas();
        break; 
        case 13: no_trabajas();
        break;
        case 14: trabajas();
        break;
        case 15: trabajas();
        break;
        case 16: no_trabajas();
        break;
        case 17: no_trabajas();
        break;
        case 18: trabajas();
        break;
        case 19: trabajas();
        break;
        case 20: no_trabajas();
        break; 
        case 21: trabajas();
        break;
        case 22: trabajas();
        break;
        case 23: no_trabajas();
        break;
        case 24: no_trabajas();
        break;
        case 25: trabajas();
        break;
        case 26: trabajas();
        break;
        case 27: no_trabajas();
        break;
    }

}

let value2,value3;

function first (value2){
    if (no_turno == 1){
        noche(value2);
        
    }
    else{
        if (no_turno == 2){
            
            mixto(value2);
        }
        else{
            if (no_turno == 3){
                manana(value2);
            }
        }
    }
}

function second (value2){

    if (no_turno == 1){
        mixto(value2);
    }
    else{
        if (no_turno == 2){
            manana(value2);
        }
        else{
            if (no_turno == 3){
            noche(value2);
            }
        }
    }
}


function masdetres (value2,value3){
    
    if (value3 == 0){
        
            if (no_turno == 1){
                manana(value2);
            }
            else{
                if (no_turno == 2){
                    noche(value2);
                }
                else{
                    if (no_turno == 3){
                        mixto(value2);
                    }
                }
            }
        
    }
    else{
        if (value3 == 1){
            
            console.log("mas de tres mandando  first");
            first(value2);
            
        }
        else{
            if (value3 == 2){
                second(value2);

            }
        }
        
    }
}

let numero1 = asigdia1(aux1,dia_inicio,mes_inicio),
    numero2 = asigdia2(aux2,dia_final,mes_final),
    resta = numero2 - numero1;

if (ano_final < ano_inicio){
    diaanterio();
}
else{
    if (ano_inicio == ano_final){ //el mismo año
        if (numero1 > numero2){  //el mismo año dia atrasado
            diaanterio();
        }else{
            if (numero1 == numero2){ //el mismo año el mismo dia
                mismodi();
            }
            else{
                 //el mismmo año antes de un mes
                //console.log("resta de los dias",resta);
                if (resta < 28){
                    
                    if(no_turno==1){
                        manana(resta);
                        
                    }
                    else{
                        if (no_turno==2){
                            noche(resta);    
                        }
                        else{
                            mixto(resta);
                        }
                    }
                }
                else{ //el mismo ano pero mas de un mes
                    let auxrestames = Math.floor(resta/28), //es para saber el numero de meses que pasaron
                        auxsobrantedia = resta % 28, //el numero de restas que sobraron
                        auxaux = auxrestames % 3;
                        
                        if (auxrestames == 1){
                            first(auxsobrantedia);
                        }
                        else{
                            if (auxrestames == 2){
                                second(auxsobrantedia);
                            }
                            else{
                                masdetres(auxsobrantedia,auxaux);
                                }
                        }
                        
                       
                    
                }
            }
        }
        
    }
    else{ //diferente año
       let auxano = ano_final - ano_inicio;
       
       if (auxano >= 2 ){
           mas ();
       }
       else{
            let auxidiaresta = 365 - numero1,
                sumadias = auxidiaresta + numero2;
               
                if (sumadias < 28){
                    if(no_turno==1){
                        manana(sumadias);
                    }
                    else{
                        if (no_turno==2){
                            noche(sumadias);
                        }
                        else{
                            mixto(sumadias);
                        }
                    }
                }

                else{ //el mismo dia pero mas de un mes
                    let     auxnumeromes = Math.floor(sumadias/28),
                            auxnumerodia = sumadias % 28,
                            auxaux1 = auxnumeromes % 3;

                            if (auxnumeromes == 1){
                                first(auxnumerodia);
                            }
                            else{
                                if (auxnumeromes == 2){
                                    second(auxnumerodia);
                                }
                                else{
                                    masdetres(auxnumerodia,auxaux1);
                                    
                                }
                            }

                }  

            
        }
    }
}

}