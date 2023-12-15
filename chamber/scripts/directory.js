const url = "https://henryohia.github.io/wdd230/chamber/data/members.json";

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
    // console.table(data.companies);
  displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
  const cards = document.querySelector("div#cards"); // output container element

  companies.forEach((company) => {
    // elements to add to the div.cards element
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let portrait = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");
    // let p5 = document.createElement("p");

    // Build the h3 content
    h3.textContent = `${company.companyName}`;

    // Build the p1 and p2
    p1.textContent = `${company.address}`;
    p2.textContent = `${company.phone}`;

    p3.textContent = `${company.level}`;

    a.setAttribute("href", company.website);
    // a.setAttribute("src", company.website);

    //
    a.rel = "preconnect";
    a.textContent = `${company.website}`;
    

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", company.image);
    portrait.setAttribute("alt", `Portrait of ${company.companyName}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "250");
    portrait.setAttribute("height", "auto");

    // const myLevel = document.createElement('img')
    // switch(company.level) {
    //   case 1:
    //     myLevel.src = "./images/level-bronze.png"
    //     myLevel.alt="Bronze"
    //     break;
    //   case 2:
    //     myLevel.src = "./images/level-silver.png"
    //     myLevel.alt="Silver"
    //     break;
    //     case 3:
    //       myLevel.src = "./images/level-gold.png"
    //       myLevel.alt="Gold"
    //     break;
    //   default:
    //     myLevel.src = "./images/level-nfp.png"
    //     myLevel.alt="Npt for Profit"
    // };
    

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(a);
    // card.appendChild(myLevel);
    // card.appendChild(p5);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getCompanyData();


const setGrid = document.querySelector('#btnGrid');
const setList = document.querySelector('#btnList');
setGrid.addEventListener('click',() => {
  setGrid.className="active";
  setList.className="";
  cards.className='grid';
});
setList.addEventListener('click',() => {
  setList.className="active";
  setGrid.className="";
  cards.className='list';
});