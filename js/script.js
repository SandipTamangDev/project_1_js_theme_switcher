const button = document.getElementById('button');
let theme;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    button.innerText = savedTheme;

    if (savedTheme === "Dark") {
        document.documentElement.classList.add("dark");
    }
}

button.addEventListener('click', () => {


    if (button.innerText === "Light") {
        button.innerText = "Dark"
        theme = "Dark"
    } else {
        button.innerText = "Light";
        theme = "Light"
    }

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", theme);
});



