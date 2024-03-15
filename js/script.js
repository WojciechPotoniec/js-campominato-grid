/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/
// tmplate = <div class="square"></div>



// creo una variabile btnplay e seleziono il bottone dall'html tramite l'id
const btnplay = document.getElementById('play')

// aggiungo un ascoltatore al button e attraverso un click accadranno cose.
btnplay.addEventListener('click', function(){
    
})


// creo una variabile btnreset e seleziono il bottone dall'html tramite l'id
const btnreset = document.getElementById('reset')

// aggiungo un ascoltatore al btnreset e attraverso un click accadranno cose.
btnreset.addEventListener('click', function(){

})


function generateGridSquare(){

    // definisco una variabile non riassegnabile per creare un elemento <div></div>
    const newEl = document.createElement('div');

    //aggiungo all'elemento la classe square
    newEl.classList.add('square');

}