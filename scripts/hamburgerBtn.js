const hamButton = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector(".primaryNav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
