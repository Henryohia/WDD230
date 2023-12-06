
// const baseURL = "https://henryohia.github.io/wdd230/"

const linksURL = "https://henryohia.github.io/wdd230/data/links.json"



async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data.weeks); // temporary testing of data retrieval
    displayLinks(data.weeks);
  }

  getLinks();

  const cards = document.querySelector(".card");


  async function displayLinks(weeks) {
    console.log(weeks)
    weeks.forEach(week => {
      // console.log(week.week)
      const oneWeek = document.createElement("h4");
      oneWeek.textContent = `${week.week}`;

      const linksList = document.createElement("ul");

      week.links.forEach(link => {
        const listItem = document.createElement("li");
        listItem.innerHTML=`<a href="${link.url}">${link.title} | </a>`
        linksList.appendChild(listItem)
        }) // end links for assignments
        
        // let card = document.createElement("section");
        // let url = document.createElement("a");
        // let p = document.createElement("p");

        // url.textContent =`<a>${week.url}</a>: ${week.title}`;
        // p.textContent = `<p>${week.title}</p>`;


        cards.appendChild(oneWeek);
        cards.appendChild(linksList);

        // cards.appendChild(card);
    });

    
    
  }

