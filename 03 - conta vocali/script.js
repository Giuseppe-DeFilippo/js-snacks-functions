/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vocali=["a", "e", "i","o","u"];

// Dichiara la funzione qui.
function controlloVocali(vocali, word){
    let conto =0;
    let vocali2= [];
    for(let i=0; i<word.length; i++){
        if(vocali.includes(word[i])){
            conto++;
            vocali2.push(word[i]);
        }

    }
    console.log(vocali2);
    return conto;
}

// Invoca la funzione qui e stampa il risultato in console
let numeroVocali = controlloVocali(vocali, word);
console.log(numeroVocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)