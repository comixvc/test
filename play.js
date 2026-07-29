
const colorButton = document.getElementById("colorButton");
const body = document.querySelector("body");

if (colorButton && body) {
    colorButton.addEventListener("click", function () {
        if (body.style.backgroundColor === "black") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            colorButton.textContent = "dark mode";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            colorButton.textContent = "light mode";
        }
    });
}

const button1 = document.getElementById("button1"); 
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

function pop() {
    alert("You clicked the button!");
}

if (button1) button1.addEventListener("click", pop);
if (button2) button2.addEventListener("click", pop);
if (button3) button3.addEventListener("click", pop);

const addItemButton = document.getElementById("addItemButton");
if (addItemButton) {
    addItemButton.addEventListener("click", function () {
        const itemInput = document.getElementById("itemInput");
        const itemList = document.getElementById("itemList");

        if (itemInput && itemList) {
            if (itemInput.value.trim() === "") {
                alert("Please enter an item.");
                return;
            }
            else{
                const newItem = document.createElement("li");
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                newItem.textContent = itemInput.value;
                itemList.appendChild(newItem);
                newItem.appendChild(deleteButton);
                itemInput.value = "";
                deleteButton.addEventListener("click", function () {
                    itemList.removeChild(newItem);
                });
            }
        }
    });
}   