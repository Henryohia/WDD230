
const baseURL = "https://henryohia.github.io/wdd230/"

const linksURL = "https://henryohia.github.io/wdd230/data/links.json"



async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data.weeks); // temporary testing of data retrieval
    displayLinks(data.weeks);
  }

  getLinks();

  let cards = document.querySelector(".card");


  async function displayLinks(weeks) {
    weeks.forEach(week => {
        
        let card = document.createElement("section");
        let url = document.createElement("a");
        let p = document.createElement("p");

        url.textContent =`<a>${week.url}</a>: ${week.title}`;
        p.textContent = `<p>${week.title}</p>`;


        card.appendChild(url);
        card.appendChild(p);

        cards.appendChild(card);
    });

    
    
  }

