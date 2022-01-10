const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const affichage = document.querySelector("#affichage");
const select = document.querySelector("#select");
const container = document.querySelector(".nes-container")
const start = document.querySelector("#start")
let black = false


const games = [{
        name: "Super Mario",
        price: 20,
    },
    {
        name: "Tetris",
        price: 25,
    },
    {
        name: "Sonic",
        price: 17.5,
    },
];

start.addEventListener("click", function() {
    games.forEach(function(games) {
        affi(games.name + " : " + games.price + "€")
    })
});

let i = 5
affichage.addEventListener("", function() {
    while (affichage.lenght < i)
        affichage.removeChild()

})

function pressOnKey(key) {
    console.log(key);
}

select.addEventListener("click", function() {
    console.log("test")
    if (black == false) {
        container.classList.add("is-dark")
        black = true
    } else {
        container.classList.remove("is-dark")
        black = false
    }
})

function affi(x) {
    const p = document.createElement("p")
    p.textContent = x
    affichage.appendChild(p)
}

affi("hello")

document.addEventListener("keyup", function(event) {
    if (event.key === 'a') {
        buttonA.classList.remove("pressed");
        pressOnKey(event.key)
        affi("Je presse sur a")
    }
    if (event.key === 'b') {
        buttonB.classList.remove("pressed");
        pressOnKey(event.key)
        affi("Je presse sur b")
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'a') {
        buttonA.classList.add("pressed");

    }
    if (event.key === 'b') {
        buttonB.classList.add("pressed");
    }
});