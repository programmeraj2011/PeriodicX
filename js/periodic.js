/* ============================
   PeriodicX - Periodic Table
============================ */

const periodicGrid = document.getElementById("periodic-table");
const searchInput = document.getElementById("search");
const detailsPanel = document.getElementById("element-details");
const positions = {

    // Period 1
    1:[1,1],
    2:[18,1],

    // Period 2
    3:[1,2],
    4:[2,2],
    5:[13,2],
    6:[14,2],
    7:[15,2],
    8:[16,2],
    9:[17,2],
    10:[18,2],

    // Period 3
    11:[1,3],
    12:[2,3],
    13:[13,3],
    14:[14,3],
    15:[15,3],
    16:[16,3],
    17:[17,3],
    18:[18,3],

    // Period 4
    19:[1,4],
    20:[2,4],
    21:[3,4],
    22:[4,4],
    23:[5,4],
    24:[6,4],
    25:[7,4],
    26:[8,4],
    27:[9,4],
    28:[10,4],
    29:[11,4],
    30:[12,4],
    31:[13,4],
    32:[14,4],
    33:[15,4],
    34:[16,4],
    35:[17,4],
    36:[18,4],

    // Period 5
    37:[1,5],
    38:[2,5],
    39:[3,5],
    40:[4,5],
    41:[5,5],
    42:[6,5],
    43:[7,5],
    44:[8,5],
    45:[9,5],
    46:[10,5],
    47:[11,5],
    48:[12,5],
    49:[13,5],
    50:[14,5],
    51:[15,5],
    52:[16,5],
    53:[17,5],
    54:[18,5],

    // Period 6
    55:[1,6],
    56:[2,6],
    72:[4,6],
    73:[5,6],
    74:[6,6],
    75:[7,6],
    76:[8,6],
    77:[9,6],
    78:[10,6],
    79:[11,6],
    80:[12,6],
    81:[13,6],
    82:[14,6],
    83:[15,6],
    84:[16,6],
    85:[17,6],
    86:[18,6],

    // Period 7
    87:[1,7],
    88:[2,7],
    104:[4,7],
    105:[5,7],
    106:[6,7],
    107:[7,7],
    108:[8,7],
    109:[9,7],
    110:[10,7],
    111:[11,7],
    112:[12,7],
    113:[13,7],
    114:[14,7],
    115:[15,7],
    116:[16,7],
    117:[17,7],
    118:[18,7],

    // Lanthanides
    57:[4,9],
    58:[5,9],
    59:[6,9],
    60:[7,9],
    61:[8,9],
    62:[9,9],
    63:[10,9],
    64:[11,9],
    65:[12,9],
    66:[13,9],
    67:[14,9],
    68:[15,9],
    69:[16,9],
    70:[17,9],
    71:[18,9],

    // Actinides
    89:[4,10],
    90:[5,10],
    91:[6,10],
    92:[7,10],
    93:[8,10],
    94:[9,10],
    95:[10,10],
    96:[11,10],
    97:[12,10],
    98:[13,10],
    99:[14,10],
    100:[15,10],
    101:[16,10],
    102:[17,10],
    103:[18,10]

};

let currentElements = [...elements];

function createPeriodicTable() {

    if (!periodicGrid) return;

    periodicGrid.innerHTML = "";

    currentElements.forEach(element => {

        const card = document.createElement("div");

        card.className = `element ${element.category
    .replace(/\s+/g,"-")
    .replace("Alkali-Metal","alkali")
    .replace("Alkaline-Earth-Metal","alkaline")
    .replace("Transition-Metal","transition")
    .replace("Post-transition-Metal","post")
    .replace("Metalloid","metalloid")
    .replace("Nonmetal","nonmetal")
    .replace("Halogen","halogen")
    .replace("Noble-Gas","noble")
    .replace("Lanthanide","lanthanide")
    .replace("Actinide","actinide")}`;

        card.innerHTML = `
            <div class="atomic-number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;

     card.onclick = () => {

    loadFlashcard(element);

    drawAtom(element);

    document.getElementById("flashcards")
        .scrollIntoView({
            behavior:"smooth"
        });


};

        periodicGrid.appendChild(card);

    });

}

function showElement(element){

    if(!detailsPanel) return;

    detailsPanel.innerHTML = `

        <h2>${element.name} (${element.symbol})</h2>

        <hr>

        <p><b>Atomic Number:</b> ${element.number}</p>

        <p><b>Atomic Mass:</b> ${element.atomicMass}</p>

        <p><b>Category:</b> ${element.category}</p>

        <p><b>Protons:</b> ${element.protons}</p>

        <p><b>Neutrons:</b> ${element.neutrons}</p>

        <p><b>Electrons:</b> ${element.electrons}</p>

        <p><b>Shells:</b> ${element.shells.join(" • ")}</p>

        <p><b>Electron Configuration:</b></p>

        <code>${element.configuration}</code>

        <hr>

        <p>${element.fact}</p>

    `;

}

if(searchInput){

searchInput.addEventListener("input",()=>{

    const value=searchInput.value.toLowerCase();

    currentElements = elements.filter(el=>

        el.name.toLowerCase().includes(value) ||

        el.symbol.toLowerCase().includes(value) ||

        String(el.number).includes(value)

    );

    createPeriodicTable();

});

}

createPeriodicTable();

