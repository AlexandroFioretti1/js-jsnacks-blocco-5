/* alert("funziona"); */

/*  
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine
*/

/* creo una array per le zucchine e assegno i valori di "tipo"\peso\lunghezza" */
/* prendo l'array "zucchine"  */

/* array di zucchine per tipo peso e lunghezza */
const zucchine = [
  { tipo: "zucchina verde", peso: 2, lunghezza: 50 },
  { tipo: "zucchina rossa", peso: 2, lunghezza: 20 },
  { tipo: "zucchina grigia", peso: 2, lunghezza: 12 },
  { tipo: "zucchina nera", peso: 2, lunghezza: 11 },
  { tipo: "zucchina mela", peso: 2, lunghezza: 5 },
  { tipo: "zucchina ", peso: 2, lunghezza: 60 },
  { tipo: "zucchina oro", peso: 2, lunghezza: 12 },
  { tipo: "zucchina vende", peso: 2, lunghezza: 11 },
  { tipo: "zucchina marte", peso: 2, lunghezza: 42 },
  { tipo: "zucchina buona", peso: 2, lunghezza: 32 },
];
console.log(zucchine);

let pesoZucchineTotale = 0;
for (let i = 0; i < zucchine.length; i++) {
  pesoZucchineTotale += zucchine[i].peso;
}

console.log("Il peso totale delle zucchine è:`pesoZucchineTotale` `kg`");
