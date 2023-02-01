/*************************
 *                       *
 *        ON LOAD        *
 *                       *
 *************************/

// collego il mio bottone per iniziare il gioco
const playBtn = document.getElementById("play");
// dichiaro una variabile per verificare che il mio bottone sia stato cliccato solo una volta
let change = 0;

playBtn.addEventListener(
    "click",
    function () {
        /*********************************************/
        /**
         * AGGIUNGO FIX SE VOGLIO CAMBIARE DIFFICOLTA'
         * 
         * ps: ho guardato da solo le relative funzioni e come vanno fatte
         **/
        if (change != 0) {
            removeElementsByClass("box");
        };
        change++;
        /*********************************************/

        // prendo il valore della difficoltà
        const difficultBtn = document.getElementById("difficult").value;

        // in base al grado di difficoltà scelto, assegno il valore di celle da creare e la classe alla mia griglia

        // prendo la mia griglia per associarle la classe in base alla difficoltà
        const gridEl = document.getElementById("grid");
        // creo una variabile per associare la quantità di celle alla difficoltà
        let boxesQuantity;

        if (difficultBtn == "easy") {
            boxesQuantity = 100;
            gridEl.classList.remove('mediumMode');
            gridEl.classList.remove('hardMode');
        } else if (difficultBtn == "medium") {
            boxesQuantity = 81;
            gridEl.classList.add('mediumMode');
            gridEl.classList.remove('hardMode');
        } else if (difficultBtn == "hard") {
            boxesQuantity = 49;
            gridEl.classList.add('hardMode');
            gridEl.classList.remove('mediumMode');
        };
        // // creo la griglia tramite la funzione
        boxes(boxesQuantity);

    }
)

/*************************
 *                       *
 *       FUNCTIONS       *
 *                       *
 *************************/

/**
 *
 * Function to create a quantity of boxes based on difficulty
 * @param {number} number that contains the quantity of boxes to create
 * @return create the quantity of boxes
 *
 */

function boxes(quantity) {
    for (let i = 0; i < quantity; i++) {

        const boxEl = document.createElement("div");
        boxEl.classList.add("box");
        boxEl.innerHTML = i + 1;
        // seleziono la mia griglia
        document.getElementById("grid").appendChild(boxEl);

        boxEl.addEventListener(
            "click",
            function () {
                boxEl.classList.toggle("active");
                console.log(boxEl);
            }
        )
    }
}

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}