const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
	if (input.value ==! "") {
        console.log("Input is not blank. Proceed with further tasks.");
    } else {
        // Provide a message or return focus to the input field
        console.log("Input is blank. Please provide a value.");

        // Return focus to the input field
        input.focus();
    }
    const li = document.createElement("li");
    const delButton = document.createElement("button");
    li.innerHTML = input.value
    delButton.textContent = "❌"
    li.appendChild(delButton);
    list.append(li);
    delButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();

    })
    input.value = "";
    input.focus();
    


});