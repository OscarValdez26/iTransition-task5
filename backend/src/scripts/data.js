import { createRandomUser } from "./fakeData.js";
import { insertErrors } from "./insertErrors.js";

const registers = [];
const seed = 123234567893;

for(let i = 0;i<10;i++){
    let key = seed + i;
    let user = createRandomUser(key,"ES");
    registers.push(user);
}

const errorRegisters = JSON.parse(JSON.stringify(registers));

errorRegisters.map((element)=>{insertErrors(element, 10);});

 console.log("Datos originales: ",registers);
 console.log("Datos con errores: ",errorRegisters);