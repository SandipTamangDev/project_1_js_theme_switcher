# **Theme Switcher (Light/Dark Mode)**

# Overview

A simple beginner-friendly project where you build a Light/Dark theme toggle using **HTML, CSS, and JavaScript**

Clicking a button switches the entire page theme instantly by adding/removing a CSS class.

No frameworks. No Tailwind. Pure fundamentals.

## **Project Goals**

* Understand DOM selection
* Use event listeners
* Toggle CSS classes
* Build two visual themes
* keep code clean and separated (HTML/CSS/JS)

## What I Learned

html
i learned about button in html require text otherwise they throw error by the extension that i had installed but can be solved with aria-label="naming it to the button behavior it should be". it wanted text for accessibility so aria-label being one of the features of accessibility it worked.


css
    i learned that we could add transition too all of the things in the html with html, body, section, button {
    transition:
    background 0.3s ease, button 0.3s ease, color 0.3s ease, border 0.3s ease; 
}

or shorter we can write same with inside transition: all 0.3s ease;


i learned there was this filter property in css that could darker the color of the text specially used on hover.

i learned that making using of letter-spacing: -0.2%; not good because it doesn't support most browser so using letter-spacing: -0.02em; is better.

i learned the use of line-height again but i had forgot what it is used of it's basically used to have how much space to give between the top and bottom sentences.

i learned that the use of tex-align: center; is used to help fallback errors or something like that.


js

i learned to make use of localStorage.setItem(); and localStorage.getItem(); where sets the local storage gotten from the data and there is get item to get where you want the data to use it.

i learned that when i use button.innerHTML should be thought through as it is risky if used to take data from the users could cause XSS attack. where as using it for your fixed value it's ok and also .innerHTML is used to get the tag inside the button if there is suppose if there was <p>hello</p> then it would take all that with the tag as well but for .innerText it would only take the "hello".

button.innerHTML = "<b>Dark</b>";

element.innerHTML = input.value;  // ❌ dangerous

so the use of innerText is best for most things.

i learned that to get the other users data we need to use 

// function getSystemTheme() {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         return "Dark";
//     } else {
//         return "Light";
//     }   
// }

converted that big function to small code as well because it had just two outcomes dark or light and using if/else should be used for complex logic that requires many conditions where as that 6 line of code was decreased to one line easier to read also, it's only used once and not need for function as it don't need to be used anywhere other then one time.

window.matchMedia("(prefers-color-scheme: dark)").match ? "Dark" : "Light";









## Key Code
```js
// 5–10 lines
