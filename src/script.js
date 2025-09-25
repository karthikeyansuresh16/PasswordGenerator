let inputslider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let genBtn = document.getElementById("genBtn");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let Symbols = document.getElementById("Symbols");

// display the slider value
sliderValue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    sliderValue.textContent = inputslider.value;
});

genBtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate password
function generatePassword() {
    // Renamed the variable to 'password' to avoid conflict with function name.
    let password = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += Symbols.checked ? symbolChars : "";

    // Simplified the check for an empty character set.
    if (allChars.length === 0) {
        return ""; // Return an empty string if no options are selected.
    }

    let i = 1;
    while (i <= inputslider.value) {
        // Corrected the variable name to 'password'.
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    // Corrected the return variable name.
    return password;
}