// current time

var d = new Date();

// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

// // Set the value of the "time" field
// var hours = d.getHours();
// var mins = d.getMinutes();
// var seconds = d.getSeconds();
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

// Get today's date
var day = d.getDate();
var month = d.getMonth() + 1; // The months are 0-based
var year = d.getFullYear();

// Set the date field to the current date
document.getElementById("date").value = day + "/" + month + "/" + year;

function validateForm() {
  let positionTitleInput = document.getElementById("position");
  let positionTitleValue = positionTitleInput.value;

  if (!positionTitleValue) {
    alert("Business position title is not required.");
  } else if (!positionTitleValue.match(positionTitleInput.pattern)) {
    alert(
      "Business position title is invalid. It should only contain alpha characters, hyphens, and spaces with a minimum of seven characters."
    );
  } else {
    alert("Business position title is valid.");
  }
}




// ************************** Last Modified **************************************
let text = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Updated: ${text}`;

// ******************* Copyright year ******************************************
new Date().getFullYear;
let date = new Date();
console.log(date.getFullYear());
const copyrightFooter = `
 <p>
  Copyright © ${new Date().getFullYear()} Ikoyi Chamber
 </p>
`;
document.getElementById("copyright").innerHTML = copyrightFooter;

// ********************************************************************