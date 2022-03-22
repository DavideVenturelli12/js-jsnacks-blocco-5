//debug
console.log('JS OK!');

/* CONSEGNA:

- Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. [X]

- Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno 
o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine. [X]

- Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

*/

// **** JSNACK 1 ****

//creo un array con 10 oggetti (zucchine)

const zucchine = [
    {
        varietà: "zucchina napoletana",
        peso: 50, // grammi
        lunghezza: 20, // cm
    },
    {
        varietà: 'trombetta',
        peso: 90, // grammi
        lunghezza: 24  // cm
    },
    {
        varietà: "zucchina romanesco",
        peso: 65, // grammi
        lunghezza: 12, // cm
    },
    {
        varietà: "zucchina ortolano di Faenza",
        peso: 55, // grammi
        lunghezza: 23, // cm
    },
    {
        varietà: "zucchina lunga fiorentina",
        peso: 100, // grammi
        lunghezza: 19, // cm
    },
    {
        varietà: 'patisson',
        peso: 35, // grammi
        lunghezza: 17  // cm
    },
    {
        varietà: "zucchina striata di Napoli",
        peso: 80, // grammi
        lunghezza: 15, // cm
    },
    {
        varietà: 'rugosa friulana',
        peso: 55, // grammi
        lunghezza: 15  // cm
    },
    {
        varietà: 'Crookneck',
        peso: 95, // grammi
        lunghezza: 19  // cm
    },
    {
        varietà: "zucchina pâtisson",
        peso: 100, // grammi
        lunghezza: 14, // cm
    },
];

//stampo la tabella con le proprietà delle zucchine
console.table(zucchine);

//calcolo la somma del peso delle zucchine
function sommaPeso(zucchine) {
    let somma = 0;
    for (let i = 0; i < zucchine.length; i++) {
        somma += zucchine[i].peso;
    }
    return somma
}

//stampo la somma del peso in g e kg
console.log(`il peso di tutte le zucchine è: ${sommaPeso(zucchine)} g, ovvero ${sommaPeso(zucchine) / 1000} kg`)



// **** JSNACK 2 ****

//creo un array per le zucchine < 15cm
const zucchineCorte = [];

//creo un array per le zucchine > 15cm
const zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchineCorte.push(zucchine[i])
    } else {
        zucchineLunghe.push(zucchine[i])
    }
}

console.table(zucchineCorte);
//stampo la somma del peso in g e kg
console.log(`il peso delle zucchine corte è: ${sommaPeso(zucchineCorte)} g, ovvero ${sommaPeso(zucchineCorte) / 1000} kg`);

console.table(zucchineLunghe);
//stampo la somma del peso in g e kg
console.log(`il peso delle zucchine corte è: ${sommaPeso(zucchineLunghe)} g, ovvero ${sommaPeso(zucchineLunghe) / 1000} kg`);



// **** JSNACK 3 ****