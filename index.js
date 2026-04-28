let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

    let string = "";

    Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
    string = eval(string);
    input.value = string;
    }
    else if (value === "AC") {
    string = "";
    input.value = string;
    }
    else if (value === "DE") {
    string = string.slice(0, -1);
    input.value = string;
    }
    else {
    string += value;
    input.value = string;
    }
    });
    });