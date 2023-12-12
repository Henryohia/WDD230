// --------------------------------------------------------------------------------------------



//   async function displayData(companies) {
//     console.log(companies)
//     companies.forEach(company => {
//         // Filter the members with silver or gold status
//         const silverGoldMembers = company.filter(
//         (company) => company.level === "silver" || company.level === "gold"
//         );

//         // Randomly select 2-3 members
//         const numMembersToShow = Math.floor(Math.random() * 2) + 2; // Random number between 2-3
//         const selectedMembers = [];
//         for (let i = 0; i < numMembersToShow; i++) {
//           const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
//           selectedMembers.push(silverGoldMembers[randomIndex]);
//           silverGoldMembers.splice(randomIndex, 1); // Remove the selected member from the array
//         }

//          // Display the selected members in the spotlight section
//          const spotlightElement = document.getElementById("spot");
//          for (const company of selectedMembers) {
//            const memberElement = document.createElement("section");
//            memberElement.classList.add("company");
//            const nameElement = document.createElement("h3");

//            nameElement.textContent = company.address;
//            memberElement.appendChild(nameElement);

//            const statusElement = document.createElement("p");
//            statusElement.textContent = company.level;
//            memberElement.appendChild(statusElement);

//            // Add other member information as needed
//            spotlightElement.appendChild(memberElement);

//           }

         
//     });
    
   

  // }

// //Member Spotlight
// const url = 'data/members.json';
// async function getMembers() {
//   const response = await fetch(url);
//   const data = await response.json();
//   const allMembers = data.companies;
//   console.log(allMembers)
//   const specialMembers = data.companies.filter(x => x.level > 1);
//   displayMembers(specialMembers)
// }

// getMembers();

// Load JSON data from a file or URL
const dataURL = "data/members.json";

async function getData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.table(data.companies); // temporary testing of data retrieval
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
  console.log(x);
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
