

button = document.getElementById("colorButton");
body = document.querySelector("body");
button.addEventListener("click", function() {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.textContent = "dark mode";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.textContent = "light mode";
    }
});