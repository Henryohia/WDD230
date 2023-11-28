const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value == !"") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value();
    input.focus();
  }
});

function todayDisplay(item) {
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  li.textContent = item;
  delButton.textContent = "❌";
  delButton.classList.add("delete");
  li.appendChild(delButton);
  list.append(li);
  delButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
  });
  input.value = "";
  input.focus();
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
