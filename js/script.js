const button = document.getElementById('button');

button.addEventListener('click', () => {


    if ( button.innerText === "Light") {
        button.innerText = "Dark"
    } else {
        button.innerText = "Light";
    }
    document.documentElement.classList.toggle("dark");
});

