/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri 
("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */

/* definisco A. + b. + array  */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 1;
let b = 9;
let risultato = [];

// Scorri l'array e aggiungi gli elementi compresi tra "a" e "b" al nuovo array
for (let i = a; i <= b; i++) {
  risultato.push(array[i]);
}
console.log(a);
console.log(b);
console.log(risultato);
