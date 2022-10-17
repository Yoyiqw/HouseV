const plus = document.querySelector(".plus__row")

const apartments = document.querySelector(".apartments__row")

const header = document.querySelector (".header__list")

const data = [
    {
        img: "./icon/bench.svg",
        p: "Рядом исторические парки и скверы",
    },
    {
        img: "./icon/apartments.svg",
        p: "Полностью обустроенный",
    },
    {
        img: "./icon/fountain.svg",
        p: "10 фонтанов на территории",
    },
    {
        img: "./icon/bike.svg",
        p: "6 км велодорожек",
    }
]

const starts = [
    {
        link:"О комплексе",
    },
    {
        link:"Район",
    },
    {
        link:"Каталог квартир",
    },
    {
        link:"Ипотека",
    },
    {
        link:"Контакты",
    },
]

const rooms = [
    {
        bg: "./img/background.png",
        title: "Лофт — 3 этажа",
    },
    {
        bg:"./img/background2.png",
        title:"Лофт — 2 этажа",
    },
    {
        bg: "./img/background.png",
        title: "Лофт — 3 этажа",
    },
    {
        bg:"./img/background2.png",
        title:"Лофт — 2 этажа",
    },
]

// первый вариант
for (let i = 0; i < data.length; i++) {
    plus.innerHTML +=
        `
        <div class="plus__item">
            <img src="${data[i].img}">
            <p class="plus__description">${data[i].p}</p>
        </div>
    `
}
// второй вариант
for (const room of rooms) {
    apartments.innerHTML +=
    `
        <div class="apartments__item">
            <img class="apartments__bg" src="${room.bg}" alt="">
            <p class="apartments__description">${room.title}</p>
        </div>
    `
}

//третий вариант

for (const start of starts) {
    header.innerHTML += 
    `
    <li class="header__item"><a href=""  class="header__link">${start.link}</a></li>
    `
}