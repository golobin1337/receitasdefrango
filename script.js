// Grid de receitas — fotos reais em public/imgs
const recipes = [
  ["Frango à Parmegiana","filedefrangoaparmegiana 1.jpg"],
  ["Frango Assado com Batatas","f8918f6ca04ec2baaa305b5b254ce4f1_XL 1.jpg"],
  ["Asinhas de Frango Assadas","617014-asa-de-frango_rec 1.jpg"],
  ["Frango ao Molho Gratinado","iStock-1464250716 1.jpg"],
  ["Rolinho de Frango com Bacon","images 1.jpg"],
  ["Empanado Crocante","peito-de-frango-crocante-agridoce-portal-minha-receita 1.jpg"],
  ["Frango na Airfryer","frango-com-legumes-na-airfryer 1.jpg"],
  ["Strogonoff de Frango","receitadeestrogonofedefrangorapido 1.jpg"],
  ["Sanduíche de Frango Desfiado","sanduiche-de-frango-light 1.jpg"],
  ["Espetinho de Frango","Peito-frango-recheado-bacon-tomate-abobrinha-Baixa-4 1.jpg"],
  ["Frango Grelhado Temperado","File-de-frango 1.jpg"],
  ["Peito de Frango Recheado no Forno","Peito-de-Frango-Recheado-no-Forno-Veja-a-Receita-e-Faca-Para-o-Almoco 1.jpg"]
];
const grid = document.getElementById("recipes-grid");
recipes.forEach(([name,file])=>{
  const div = document.createElement("div");
  div.className = "recipe-card";
  div.innerHTML = `<img src="${encodeURI("public/imgs/" + file)}" alt="${name}" loading="lazy"><div class="overlay">${name}</div>`;
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
