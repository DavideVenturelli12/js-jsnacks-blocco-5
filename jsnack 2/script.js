//debug
console.log('JS OK!');

/* CONSEGNA:

- Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno 
o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

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

console.table(zucchine);

const zucchineCorte = [];

const zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchineCorte.push(zucchine[i])
    } else {
        zucchineLunghe.push(zucchine[i])
    }
}

console.table(zucchineCorte);

console.table(zucchineLunghe);