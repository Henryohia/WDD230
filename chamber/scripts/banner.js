// *************** Banner **************************

// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// weekday[7] = "Sunday";

// var day = weekday[now.getDay()];

// // document.writeln("<p>Today is " + day + "</p>");
// if (day === day) {
//   const header = document.querySelector("header");
//   const para = document.createElement("p");
//   para.textContent =
//     "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
//   header.appendChild(para);
//   para.style.backgroundColor = "#523a34";
//   para.style.color = "#f4806a";
//   para.style.position = "absolute";
//   para.style.top = "0";
//   para.style.width = "100%";
//   para.style.padding = "0";
//   para.style.margin = "0";
//   para.style.textAlign = "center";
//   para.style.fontWeight = "bold";
// }



  // Check if today is Monday, Tuesday, or Wednesday
  const today = new Date().getDay();

  if (today >= 0 && today <= 3) {
    // Show the banner if it's Monday, Tuesday, or Wednesday
    document.getElementById('banner').style.display = 'block';
  }

  function closeBanner() {
    // Close the banner when the user clicks the close button
    document.getElementById('banner').style.display = 'none';
  }