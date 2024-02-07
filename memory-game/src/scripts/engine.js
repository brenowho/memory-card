const imagePaths = [//colocar emojis
    "../src/images/ashe.png",
    "../src/images/ashe.png",
    "../src/images/caitlyn.png",
    "../src/images/caitlyn.png",
    "../src/images/draven.png",
    "../src/images/draven.png",
    "../src/images/ivern.png",
    "../src/images/ivern.png",
    "../src/images/jinx.png",
    "../src/images/jinx.png",
    "../src/images/lux.png",
    "../src/images/lux.png",
    "../src/images/miss-fortune.png",
    "../src/images/miss-fortune.png",
    "../src/images/tristana.png",
    "../src/images/tristana.png",
    
];

    

let openCards = []; // guardar cartas selecionadas para depois comparar

let shuffleImages = imagePaths.sort(() => (Math.random() > 0.5 ? 2 : -1)); // função que embaralha as cartas

for (let i = 0; i < imagePaths.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    
    // Adiciona uma imagem dentro da div
    let image = document.createElement("img");
    image.src = shuffleImages[i];
    box.appendChild(image);

    image.style.width = "50%";
    image.style.height = "50%";
    
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll('.boxMatch').length === imagePaths.length) {
        alert("Você venceu!");
    }
}




