/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let names2 = []; //VARIABILE CREATA

// Dichiara la funzione qui.
function ar(names){
    //console.log(names[0][0]);
    let names2 = [];    
    for(let i=0; i<names.length; i++){
        names2.push(names[i][0]) ;

        //console.log(names[i][0]);
    }      
      return names2;         
    }

// Invoca la funzione qui e stampa il risultato in console
names2 =ar(names);
console.log(names2);   

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]