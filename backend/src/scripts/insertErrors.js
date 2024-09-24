export function insertErrors(json, decimal) {
    let err;
    const repetitions = Math.floor(decimal);
    const probability = Math.floor((decimal * 100) - (repetitions * 100));
    for (let i = 0; i < repetitions; i++) {
        err = insertErrorsInJson(json);
        json = err;
    }
    const random = Math.floor((Math.random() * 100) + 1);
    if (random < probability) {
        err = insertErrorsInJson(json);
        json = err;
    }
    return json;
}

function insertErrorsInJson(json) {
    // Lista de posibles errores para aplicar
    const posibleErrors = [
        () => { json.name = insertCharacter(json.name); },
        () => { json.address = insertCharacter(json.name); },
        () => { json.name = deleteCharacter(json.name); },
        () => { json.address = deleteCharacter(json.name); },
        () => { json.name = swapCaracter(json.name); },
        () => { json.address = swapCaracter(json.name); },
    ];

    const randomError = Math.floor(Math.random() * posibleErrors.length);
    posibleErrors[randomError]();  // Aplica un error aleatorio
    return json;
}

//INSERTAR ERROR TIPOGRAFICO

function insertTipingError(str) {
    // Si el string tiene menos de 2 caracteres, no insertamos error.
    if (str.length < 2) return str;

    const pos = Math.floor(Math.random() * str.length);
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Letra aleatoria

    return str.substring(0, pos) + randomChar + str.substring(pos + 1);
}

function insertErrorNumber(numero) {
    const pos = Math.floor(Math.random() * numero.length);
    const randomDigit = Math.floor(Math.random() * 10); // Número aleatorio entre 0-9

    return numero.substring(0, pos) + randomDigit + numero.substring(pos + 1);
}

function insertCharacter(str){
    if (str.length < 2) return str;
    const pos = Math.floor(Math.random() * str.length);
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Letra aleatoria
    return str.substring(0, pos) + randomChar + str.substring(pos);
}

function deleteCharacter(str){
    if (str.length < 2) return str;
    const pos = Math.floor(Math.random() * str.length);
    return str.substring(0, pos) + str.substring(pos + 1);
}

function swapCaracter(str){
    if (str.length < 2) return str;
    const pos = Math.floor(Math.random() * str.length-1);
    const char1 = str.substring(pos,pos+1);
    const char2 = str.substring(pos+1, pos+2);
    const swap = char2 + char1;
    return str.substring(0, pos) + swap + str.substring(pos + 2);
}