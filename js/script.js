const button = document.getElementById('button');

let theme = localStorage.getItem("theme");

// function getSystemTheme() {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         return "Dark";
//     } else {
//         return "Light";
//     }   
// }

const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").match ? "Dark" : "Light";

if (!theme) theme = getSystemTheme();

button.innerText = theme;

document.documentElement.classList.add(theme);

// if (savedTheme) {
//     button.innerText = savedTheme;

//     if (savedTheme === "Dark") {
//         document.documentElement.classList.add("Dark");
//     }

//     if (savedTheme === "Light") {
//         document.documentElement.classList.add("Light");
//     }
// } else {
//     const systemTheme = getSystemTheme();
//     button.innerText = "systemTheme";

//     if (systemTheme === "Dark") {
//         document.documentElement.classList.add("Dark")
//     } 

//     if (systemTheme === "Light") {
//         document.documentElement.classList.add("Light");
//     }
// }

// button.addEventListener('click', () => {


//     if (button.innerText === "Light") {
//         button.innerText = "Dark"
//         theme = "Dark"
//         document.documentElement.classList.remove("Light");
//         document.documentElement.classList.add("Dark");

//     } else {
//         button.innerText = "Light";
//         theme = "Light"
//         document.documentElement.classList.add("Light");
//         document.documentElement.classList.remove("Dark");
//     }

//     localStorage.setItem("theme", theme);
// });


button.addEventListener('click', () => {
    theme = theme === "Light" ? "Dark" : "Light";
    button.innerText = theme;

    document.documentElement.classList.toggle("Light", theme === "Light");
    document.documentElement.classList.toggle("Dark", theme === "Dark");

    localStorage.setItem("theme", theme);
});


