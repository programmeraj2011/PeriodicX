/* =====================================================
   PeriodicX v1
   Professional Flashcard System
   Developed by Aditya Jaiswal
===================================================== */

const flashcardContainer = document.getElementById("flashcardContainer");

let currentIndex = 0;
let flipped = false;

/* ==========================================
   Load Flashcard
========================================== */

function loadFlashcard(element){

    if(!flashcardContainer) return;

    if(typeof element === "number"){
        currentIndex = element;
        element = elements[currentIndex];
    }else{
        currentIndex = elements.findIndex(e=>e.number===element.number);
    }

    flipped = false;

    flashcardContainer.innerHTML = `

    <div class="flash-card" id="flashCard">

        <div class="flash-front">

            <div class="symbol">${element.symbol}</div>

            <h2>${element.name}</h2>

            <p>Atomic Number</p>

            <h1>${element.number}</h1>

            <small>${element.category}</small>

        </div>

        <div class="flash-back">

            <h2>${element.name}</h2>

            <hr>

            <p><b>Atomic Mass</b></p>
            <p>${element.atomicMass}</p>

            <hr>

            <p><b>Electron Configuration</b></p>
            <p>${element.configuration}</p>

            <hr>

            <p><b>Shells</b></p>
            <p>${element.shells.join(" • ")}</p>

            <hr>

            <p><b>Protons</b> : ${element.protons}</p>
            <p><b>Neutrons</b> : ${element.neutrons}</p>
            <p><b>Electrons</b> : ${element.electrons}</p>

        </div>

    </div>

    `;

    drawAtom(element);

}

/* ==========================================
   Flip
========================================== */

function flipCard(){

    const card = document.getElementById("flashCard");

    if(!card) return;

    flipped = !flipped;

    card.classList.toggle("flipped");

}

/* ==========================================
   Next
========================================== */

function nextCard(){

    currentIndex++;

    if(currentIndex>=elements.length)
        currentIndex=0;

    loadFlashcard(currentIndex);

}

/* ==========================================
   Previous
========================================== */

function previousCard(){

    currentIndex--;

    if(currentIndex<0)
        currentIndex=elements.length-1;

    loadFlashcard(currentIndex);

}

/* ==========================================
   Random
========================================== */

function randomCard(){

    currentIndex=Math.floor(Math.random()*elements.length);

    loadFlashcard(currentIndex);

}

/* ==========================================
   Favourite
========================================== */

function favouriteCard(){

    let fav = JSON.parse(localStorage.getItem("favourites")) || [];

    const number = elements[currentIndex].number;

    if(!fav.includes(number)){

        fav.push(number);

        localStorage.setItem("favourites",JSON.stringify(fav));

        showToast("⭐ Added to Favourites");

    }

    updateDashboard();

}

/* ==========================================
   Studied
========================================== */

function studiedCard(){

    let studied = JSON.parse(localStorage.getItem("studied")) || [];

    const number = elements[currentIndex].number;

    if(!studied.includes(number)){

        studied.push(number);

        localStorage.setItem("studied",JSON.stringify(studied));

        showToast("📚 Marked as Studied");

    }

    updateDashboard();

}

/* ==========================================
   Default
========================================== */

window.addEventListener("load",()=>{

    loadFlashcard(0);

});