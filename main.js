const btnOpen = document.querySelector("#btnOpenCookie");
const btnOpenAnother = document.querySelector("#btnOpenAnother");

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const sentences = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não compense na ira o que lhe falta na razão.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "A paciência na adversidade é sinal de um coração sensível.",
];

//events
btnOpen.addEventListener("click", toggleScreen);
btnOpenAnother.addEventListener("click", toggleScreen);
document.addEventListener("keydown", handleEnterButton);

//callback functions
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  screen2.querySelector("p").innerText = getRandomSentence(sentences);
}

function getRandomSentence(sentences) {
  const randomSentence = Math.floor(Math.random() * sentences.length);
  return sentences[randomSentence];
}

// function openCookie(event) {
//   event.preventDefault();

//   toggleScreen();
//   screen2.querySelector("p").innerText = getRandomSentence(sentences);
// }

function handleEnterButton(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  } else if (e.key == "Enter" && screen2.classList.contains("hide")){
    toggleScreen();
  }
}