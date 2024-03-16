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
const btnplay = document.getElementById("play");
console.log(btnplay);

const grid = document.getElementById("grid");

// aggiungo un ascoltatore al button e attraverso un click accadranno cose.
btnplay.addEventListener("click", function () {
    
    // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
  for (let index = 0; index < 100; index++) {
    grid.appendChild(generateNewGridSquare(index + 1));
  }
});

function generateNewGridSquare(content) {
  
    // definisco una variabile non riassegnabile per creare un nuovo elemento nel DOM <div></div>
  const newEl = document.createElement("div");
  
  // aggiungo del contenuto all'interno della variabile newEl = <div></div>
    newEl.innerHTML = '<span>' + content + '</span>';

  //aggiungo all'elemento la classe .square
  newEl.classList.add("square");

  // ritorno l'elemento fuori dalla funzione
  return newEl;
}

// creo una variabile btnreset e seleziono il bottone dall'html tramite l'id
const btnreset = document.getElementById("reset");

// aggiungo un ascoltatore al btnreset e attraverso un click accadranno cose.
btnreset.addEventListener("click", function () {
  
    // rimuovo gli elementi contenuti nella griglia
    grid.innerHTML = "";
});
