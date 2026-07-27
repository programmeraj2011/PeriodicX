/* =====================================================
   PeriodicX v1
   Animated Bohr Atom Viewer
   Developed by Aditya Jaiswal
===================================================== */

const atomViewer = document.getElementById("atomViewer");

let currentAtom = null;

/* =========================================
   Draw Atom
========================================= */

function drawAtom(element){

    if(!atomViewer) return;

    currentAtom = element;

    atomViewer.innerHTML = "";

    // Nucleus
    const nucleus = document.createElement("div");
    nucleus.className = "nucleus";

    nucleus.innerHTML = `
        <h2>${element.symbol}</h2>
        <span>${element.number}</span>
    `;

    atomViewer.appendChild(nucleus);

    const shells = element.shells;

    shells.forEach((count,index)=>{

        const shell = document.createElement("div");

        shell.className = "shell";

        shell.style.width = (140 + index*90) + "px";
        shell.style.height = (140 + index*90) + "px";

        const radius = (140 + index*90)/2;

        for(let i=0;i<count;i++){

            const electron = document.createElement("div");

            electron.className="electron";

            const angle=(360/count)*i;

            electron.style.transform=`
                rotate(${angle}deg)
                translate(${radius}px)
            `;

            shell.appendChild(electron);

        }

        shell.style.animationDuration=(12+index*4)+"s";

        atomViewer.appendChild(shell);

    });

}

/* =========================================
   Default Atom
========================================= */

if(typeof elements!=="undefined"){

    drawAtom(elements[0]);

}