/* ======================================================
   PeriodicX v1
   Main App Controller
   Developed by Aditya Jaiswal
====================================================== */

const themeBtn = document.getElementById("themeBtn");

let darkMode = localStorage.getItem("theme") !== "light";

/* ===========================
   Theme
=========================== */

function applyTheme(){

    if(darkMode){

        document.body.classList.remove("light");

        themeBtn.textContent="🌙";

        localStorage.setItem("theme","dark");

    }else{

        document.body.classList.add("light");

        themeBtn.textContent="☀";

        localStorage.setItem("theme","light");

    }

}

if(themeBtn){

    themeBtn.onclick=()=>{

        darkMode=!darkMode;

        applyTheme();

    };

}

applyTheme();

/* ===========================
   Dashboard
=========================== */

function updateDashboard(){

    const studied=
        JSON.parse(localStorage.getItem("studied")) || [];

    const favourites=
        JSON.parse(localStorage.getItem("favourites")) || [];

    document.getElementById("studiedCount").textContent=
        studied.length;

    document.getElementById("favouriteCount").textContent=
        favourites.length;

    const percent=Math.round((studied.length/118)*100);

    document.getElementById("progressPercent").textContent=
        percent+"% Completed";

}

/* ===========================
   Scroll
=========================== */

function scrollToElements(){

    document.getElementById("elements").scrollIntoView({

        behavior:"smooth"

    });

}

/* ===========================
   Notifications
=========================== */

function showToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}

/* ===========================
   Keyboard Shortcuts
=========================== */

document.addEventListener("keydown",e=>{

    if(e.key==="ArrowRight"){

        nextCard();

    }

    if(e.key==="ArrowLeft"){

        previousCard();

    }

    if(e.code==="Space"){

        e.preventDefault();

        flipCard();

    }

});

/* ===========================
   Init
=========================== */

window.onload=()=>{

    createPeriodicTable();

    loadFlashcard(0);

    drawAtom(elements[0]);

    updateDashboard();

};