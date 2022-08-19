function Digimon(Image, Level, Name) {
  this.image = Image;
  this.level = Level;
  this.name = Name;
}
let digimonArr = [];
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 20; i++) {
      let newDigimon = new Digimon(data[i].img, data[i].level, data[i].name);
      digimonArr.push(newDigimon);
    }
    console.log(digimonArr);

    digimonArr.map(render);
  });
// get search button from DOM
const searchButton = document.getElementById("searchButton");
// get search by name input from DOM
const searchFelidByName = document.getElementById("searchFelidByName");

// get search by name input from DOM
const searchFelidByLevel = document.getElementById("searchFelidByLevel");

let cardsDiv = document.getElementById("cardsDiv");

function render(digimonArr) {
  let card = document.createElement("div");
  cardsDiv.append(card);

  let img = document.createElement("img");
  img.setAttribute("src", digimonArr.image);
  card.append(img);

  let cardText = document.createElement("div");
  card.append(cardText);

  let nameH2 = document.createElement("h2");
  nameH2.textContent = "Name : " + digimonArr.name;
  cardText.append(nameH2);

  let p = document.createElement("p");
  p.textContent = "Level : " + digimonArr.level;
  cardText.append(p);
}
