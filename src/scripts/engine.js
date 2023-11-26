const emojis = [
    "🧨",
    "🧨",
    "🎁",
    "🎁",
    "⚽",
    "⚽",
    "🥊",
    "🥊",
    "🚗",
    "🚗",
    "🚀",
    "🚀",
    "🚂",
    "🚂",
    "🚛",
    "🚛"
];
let openCards = [];
let cardsOK = [];
let jogadas = 0;

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2 && !openCards.includes(this) && !cardsOK.includes(this)) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        cardsOK.push(...openCards);
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    jogadas++;
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        document.querySelector(".game").innerHTML = `
            <h2>Você Venceu!!</h2>
            <p>Quantidade de jogadas: ${jogadas}</p>
        `
    }
}