import fs from 'fs'
import { aRecibos } from './resources/recibos.js'

setTimeout(() => {
    console.log('mensaje final');
}, 7000)

console.log(aRecibos);

aRecibos.forEach(recibo => {
    console.log (`Recibo: ${recibo.cliente} - Importe:  ${recibo.importe}`);
});

let recibosPorImporte = aRecibos.sort((reciboA, reciboB) => reciboA.importe - reciboB.importe);

console.log(recibosPorImporte);

let clientesConR = aRecibos.filter(recibo => recibo.cliente.startsWith('R'));

console.log(clientesConR);

let recibosAumentados = aRecibos.map(recibo => recibo = {id: recibo.id, numero: recibo.numero,
                                         importe: (recibo.importe+= (recibo.importe * 0.3)), cliente: recibo.cliente});

console.log(recibosAumentados);

fs.appendFileSync('./src/resources/mensaje.txt', 'nuevo texto');


