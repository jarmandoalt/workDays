export function si() {
    
    const $h1 = document.getElementById("aux");
    
    $h1.innerHTML = '<h1> Este día trabajas </h1>';
    $h1.classList.add("mensaje");
    return $h1;
}

export function no() {
    const $h1 = document.getElementById("aux");
    
    $h1.innerHTML = '<h1> Este día no trabajas </h1>';
    $h1.classList.add("mensaje");
    return $h1;
}

export function mismoDia() {
    const $h1 = document.getElementById("aux");
    
    $h1.innerHTML = '<h1> Las dos fechas son iguales </h1>';
    $h1.classList.add("error");
    return $h1;
}

export function diaAnterior() {
    const $h1 = document.getElementById("aux");
    
    $h1.innerHTML = '<h1> La segunda fecha es anterior a la primera </h1>';
    $h1.classList.add("error");
    return $h1;
}

export function mas1ano() {
    const $h1 = document.getElementById("aux");
    
    $h1.innerHTML = '<h1> No se puede usar fechas con más de 1 año de diferencia </h1>';
    $h1.classList.add("error");
    return $h1;
}