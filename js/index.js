console.log();

const convertCharToHTML = (char) => {
    if (char === 'Ä') return "&Auml";
    else if (char === 'ä') return "&auml";
    else if (char === 'Å') return "&Aring";
    else if (char === 'å') return "&aring";
    else if (char === 'Ö') return "&Ouml";
    else if (char === 'ö') return "&ouml";
    else return char;
}

const verbs = [
    ["salja mjolk", "Den forsta december 1798 salde Juliana mjolk for 6 riksdaler till Cristina Charlotta Hiarne", "https://www.gaw.hist.uu.se/vad-kan-jag-hitta-i-gaw/kallunderlag/stockholm--cristina-charlotta-hiarnes-kassabok/"],
    ["komma i tj&aumlnst", "Den andra december 1685 b&oumlrjade Per Larsson sin anst&aumlllning som g&aringrdsdr&aumlng hos brukspatronen i Ramn&aumls", "https://www.gaw.hist.uu.se/vad-kan-jag-hitta-i-gaw/kallunderlag/ramnas--bruksrakenskaper/"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"],
    ["komma i tjänst", "Den andra december 1685 började Per Larsson sin anställning som gårdsdräng hos brukspatronen i Ramnäs"]
]

const imgs = [
    "./img/Bennet_mjolkpigor.jpg",
    "./img/Ramnas.jpg"
];

let cards = [];

for (let i = 1; i < 25; i++) {
    cards.push(
        `<div class="card-container" data-open="false" data-index=${i}>
            <div class="card-cover">
                <h1>${i}</h1>
            </div>
            <div class="card-content">
                <div class="card-front">
                    <h2>${verbs[i-1][0]}</h2>
                </div>
                <div class="card-back">
                    <p>${verbs[i-1][1]}</p>
                    <a href="${verbs[i-1][2]}">L&aumls mer</a>
                </div>
            </div>
        </div>`
    );
}

// Random card order
// cards = cards.sort(() => Math.random() - 0.5);

cards.forEach((card) => {
    document.querySelector(".container").innerHTML += card;
});

for (let i = 1; i < imgs.length + 1; i++) {
    document.querySelector(`.card-container[data-index = '${i}']`).querySelector(".card-content>.card-front").style.backgroundImage = `url(${imgs[i - 1]})`;
}

const cardContainers = document.querySelectorAll(".card-container");

const today = new Date();
const currentDate = today.getDate() + (today.getMonth() + 2) * 100 + today.getFullYear() * 10000;

cardContainers.forEach(e => {
    e.addEventListener("click", event => {
        console.log(parseInt(e.dataset.index) + 2022_12_00, currentDate);
        const openCard = document.querySelector(".card-container[data-open='true']");
        if (openCard !== null) {
            cardInteract(openCard);
        }

        if (openCard !== null) {
            if (openCard !== e && currentDate >= parseInt(e.dataset.index) + 2022_12_00) {
                setTimeout(() => cardInteract(e), 750);
            }
        } else if (currentDate >= parseInt(e.dataset.index) + 2022_12_00) {
            cardInteract(e);
        }
    })
});

// Open close cards
const cardInteract = (e) => {
    e.dataset.open = e.dataset.open === "true" ? "false" : "true";
    const cover = e.querySelector(".card-cover");
    const content = e.querySelector(".card-content");
    if (e.dataset.open === "true") {
        cover.style.transitionDelay = "0ms";
        content.style.transitionDelay = "450ms";
        setTimeout(() => cover.style.zIndex="-1", 450);
        setTimeout(() => e.dataset.delay="true", 2000);
    } else {
        cover.style.transitionDelay = "450ms";
        content.style.transitionDelay = "0ms";
        setTimeout(() => cover.style.zIndex="1", 450);
        e.dataset.delay="false";
    }
}