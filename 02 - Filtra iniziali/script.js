/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */


//array di stringhe
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let lettera = "A";
let newnames = [];

// Dichiara la funzione qui.
function choose(names, lettera){
    let nuovo =[];
    for(let i=0; i<names.length; i++){
        if(lettera===names[i][0]){
            nuovo.push(names[i]);    
        }
    }
   return nuovo;


}


// Invoca la funzione qui e stampa il risultato in console
newnames= choose(names, lettera);
console.log(newnames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]