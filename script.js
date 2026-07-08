// Grid de receitas — placeholders coloridos (trocar por fotos reais dos pratos)
const recipes = [
  ["🍗","Frango à Parmegiana","#e2600f,#f39c2e"],
  ["🥟","Coxinha Desfiada","#d35400,#f39c12"],
  ["🥡","Frango Xadrez","#c17817,#f39c2e"],
  ["🍲","Frango ao Molho","#a04000,#e59866"],
  ["🍔","Hambúrguer de Frango","#a8420a,#e2600f"],
  ["🍤","Empanado Crocante","#af601a,#f5b041"],
  ["🍽️","Frango na Airfryer","#c1440e,#f5b942"],
  ["🥘","Strogonoff","#6e2c00,#dc7633"],
  ["🥪","Sanduíche de Frango Desfiado","#a8420a,#f39c2e"],
  ["🍢","Espetinho","#b8460a,#f5b942"],
  ["🍖","Frango Grelhado Temperado","#935116,#f0b27a"],
  ["🥞","Panqueca de Frango","#873600,#e0a458"]
];
const grid = document.getElementById("recipes-grid");
recipes.forEach(([emoji,name,colors])=>{
  const div = document.createElement("div");
  div.className = "recipe-card";
  div.style.background = `linear-gradient(135deg, ${colors})`;
  div.innerHTML = `<div class="emoji">${emoji}</div><div class="overlay">${name}</div>`;
  grid.appendChild(div);
});

// Countdown até a meia-noite (urgência "acaba hoje")
function updateCountdown(){
  const now = new Date();
  const end = new Date();
  end.setHours(23,59,59,999);
  let diff = Math.max(0, end - now);
  const h = String(Math.floor(diff/3600000)).padStart(2,"0");
  const m = String(Math.floor((diff%3600000)/60000)).padStart(2,"0");
  const s = String(Math.floor((diff%60000)/1000)).padStart(2,"0");
  document.getElementById("cd-h").textContent = h;
  document.getElementById("cd-m").textContent = m;
  document.getElementById("cd-s").textContent = s;
}
updateCountdown();
setInterval(updateCountdown, 1000);
