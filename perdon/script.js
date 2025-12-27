const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const btnFinal = document.getElementById("btnFinal");
const final = document.getElementById("final");

sobre.addEventListener("click", () => {
  sobre.style.display = "none";
  carta.style.display = "block";
});

btnFinal.addEventListener("click", () => {
  final.style.display = "block";
});
