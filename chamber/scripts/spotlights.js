// --------------------------------------------------------------------------------------------

// Load JSON data from a file or URL
const dataURL = "data/members.json";

async function getData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    // console.table(data.companies); // temporary testing of data retrieval
    const specialMembers = data.companies.filter(x => x.level > 1);
    displayMembers(data.companies);
  }

  getData();

  
const displayMembers = (spotList) => {
  for (let i = 0; i < 3; i++) {
    //console.log(spotList)
    //console.log(spotList.length)
    randomSpot = Math.floor(Math.random() * spotList.length);
    //console.log(randomSpot)
    selectedSpot = spotList[randomSpot]
    spotList.splice(randomSpot, 1);
    //console.log(selectedSpot)
    //console.log(spotList)
    displaySpot(selectedSpot)
  }
}


const spotCards = document.querySelector('#spot');
function displaySpot(x) {
  // console.log(x);
  const mySpot = document.createElement('section');
  mySpot.className = "spot";
  const myHeader = document.createElement('span');
  myHeader.textContent = "SPOTLIGHT";
  const myCompany = document.createElement('h2');
  myCompany.textContent = x.companyName;
  const address = document.createElement('p');
  address.textContent = x.address;
  const phone = document.createElement('p');
  phone.textContent = x.phone;
  const level = document.createElement('p')
  level.textContent = x.level;
  const img = document.createElement('img');
  img.src = `${x.image}`;
  img.alt = x.companyName;
  const myURL = document.createElement('a');
  myURL.textContent = x.website;
  myURL.href = x.website;
  myURL.target = "_blank";

  mySpot.appendChild(myHeader);
  mySpot.appendChild(myCompany);
  mySpot.appendChild(address);
  mySpot.appendChild(phone);
  mySpot.appendChild(level);
  mySpot.appendChild(img);
  mySpot.appendChild(myURL);
  spotCards.appendChild(mySpot);
}
