const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");
let cardAtual = 0;

btnNext.addEventListener("click", function () {
  if (cardAtual === cards.length - 1) {
    return;
  }

  hideCardSelected();

  cardAtual++;
  showCard(cardAtual);
});

btnBack.addEventListener("click", function () {
  if (cardAtual === 0) {
    return;
  }

  hideCardSelected();

  cardAtual--;
  showCard(cardAtual);
});


function showCard(cardAtual) {
  cards[cardAtual].classList.add("selected");
}

function hideCardSelected() {
  const cardSelected = document.querySelector(".selected");
  cardSelected.classList.remove("selected");
}
