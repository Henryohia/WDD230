

// form today
// const x = new Date();
// // console.log(x)
// document.querySelector("input[name='today']").value = x;


// ************************** Last Modified **************************************
let text = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Updated: ${text}`;

// ******************* Copyright year ******************************************
new Date().getFullYear;
let date = new Date();
// console.log(date.getFullYear());
const copyrightFooter = `
 <p>
  Copyright © ${new Date().getFullYear()} Ikoyi Chamber
 </p>
`;
document.getElementById("copyright").innerHTML = copyrightFooter;

// ********************************************************************