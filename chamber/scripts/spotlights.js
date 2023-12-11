// --------------------------------------------------------------------------------------------

// Load JSON data from a file or URL
const dataURL = "data/members.json";

async function getData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.table(data.companies); // temporary testing of data retrieval
    displayData(data.companies);
  }

  getData();

  async function displayData(companies) {
    console.log(companies)
    companies.forEach(company => {
        // Filter the members with silver or gold status
        const silverGoldMembers = company.filter(
        (company) => company.level === "silver" || company.level === "gold"
        );

        // Randomly select 2-3 members
        const numMembersToShow = Math.floor(Math.random() * 2) + 2; // Random number between 2-3
        const selectedMembers = [];
        for (let i = 0; i < numMembersToShow; i++) {
          const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
          selectedMembers.push(silverGoldMembers[randomIndex]);
          silverGoldMembers.splice(randomIndex, 1); // Remove the selected member from the array
        }

         // Display the selected members in the spotlight section
         const spotlightElement = document.getElementById("spot");
         for (const company of selectedMembers) {
           const memberElement = document.createElement("section");
           memberElement.classList.add("company");
           const nameElement = document.createElement("h3");

           nameElement.textContent = company.address;
           memberElement.appendChild(nameElement);

           const statusElement = document.createElement("p");
           statusElement.textContent = company.level;
           memberElement.appendChild(statusElement);

           // Add other member information as needed
           spotlightElement.appendChild(memberElement);

          }

      

    
    
    
    });
    

    

     

      

      

  }

// fetch(dataUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Filter the members with silver or gold status
//     const silverGoldMembers = data.companies.filter(
//       (company) => company.level === "silver" || company.level === "gold"
//     );

//     // Randomly select 2-3 members
//     const numMembersToShow = Math.floor(Math.random() * 2) + 2; // Random number between 2-3
//     const selectedMembers = [];
//     for (let i = 0; i < numMembersToShow; i++) {
//       const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
//       selectedMembers.push(silverGoldMembers[randomIndex]);
//       silverGoldMembers.splice(randomIndex, 1); // Remove the selected member from the array
//     }

//     // Display the selected members in the spotlight section
//     const spotlightElement = document.getElementById("spot");
//     for (const company of selectedMembers) {
//       const memberElement = document.createElement("section");
//       memberElement.classList.add("company");

//       const nameElement = document.createElement("h3");
//       nameElement.textContent = company.address;
//       memberElement.appendChild(nameElement);

//       const statusElement = document.createElement("p");
//       statusElement.textContent = company.level;
//       memberElement.appendChild(statusElement);

//       // Add other member information as needed

//       spotlightElement.appendChild(memberElement);
//     }
//   });