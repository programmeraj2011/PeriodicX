/* ======================================================
   PeriodicX v1
   Virtual Chemistry Lab
   Developed by Aditya Jaiswal
====================================================== */

const reactionArea = document.getElementById("reactionArea");

const reactions = [

{
name:"Hydrogen + Oxygen",
equation:"2H₂ + O₂ → 2H₂O",
type:"Combination",
description:"Hydrogen burns in oxygen to produce water.",
energy:"Exothermic"
},

{
name:"Sodium + Water",
equation:"2Na + 2H₂O → 2NaOH + H₂",
type:"Single Displacement",
description:"Highly vigorous reaction producing hydrogen gas.",
energy:"Exothermic"
},

{
name:"Magnesium Burning",
equation:"2Mg + O₂ → 2MgO",
type:"Oxidation",
description:"Magnesium burns with a bright white flame.",
energy:"Exothermic"
},

{
name:"Calcium Carbonate",
equation:"CaCO₃ → CaO + CO₂",
type:"Thermal Decomposition",
description:"Heating limestone produces quicklime.",
energy:"Endothermic"
},

{
name:"Iron Rusting",
equation:"4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
type:"Corrosion",
description:"Iron slowly reacts with oxygen and moisture.",
energy:"Slow Oxidation"
}

];

function loadLab(){

reactionArea.innerHTML="";

reactions.forEach((reaction,index)=>{

const card=document.createElement("div");

card.className="reaction-card";

card.innerHTML=`

<h2>${reaction.name}</h2>

<h3>${reaction.equation}</h3>

<p>${reaction.description}</p>

<p><b>Reaction Type:</b> ${reaction.type}</p>

<p><b>Energy:</b> ${reaction.energy}</p>

<button onclick="runReaction(${index})">

▶ Simulate

</button>

`;

reactionArea.appendChild(card);

});

}

function runReaction(index){

const reaction=reactions[index];

alert(

reaction.name+

"\n\n"+

reaction.equation+

"\n\n"+

reaction.description

);

}

window.addEventListener("load",loadLab);