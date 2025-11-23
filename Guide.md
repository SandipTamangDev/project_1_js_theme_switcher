# **Theme Switcher (Light/Dark Mode)**

## **Overview**

A simple beginner-friendly project where you build a Light/Dark theme toggle using **HTML, CSS, and JavaScript**.
Clicking a button switches the entire page theme instantly by adding/removing a CSS class.

No frameworks. No Tailwind. Pure fundamentals.

---

## **Project Goals**

* Understand DOM selection
* Use event listeners
* Toggle CSS classes
* Build two visual themes
* Keep code clean and separated (HTML/CSS/JS)

---

## **What You Will Build**

A page that can:

* Start in light or dark mode
* Switch themes when a button is clicked
* Change background + text colors
* Maintain readability in both modes
* (Optional) Remember the theme using `localStorage`

---

## **Requirements**

### **HTML**

* A main container (body is fine)
* One button labeled “Toggle Theme”

### **CSS**

* Define light mode colors
* Define dark mode colors
* Use a class named `.dark-mode` to activate dark mode
* Apply colors using regular CSS or CSS variables

### **JavaScript**

* Select the toggle button
* Add a click event listener
* Toggle the `.dark-mode` class on the body or root element
* (Optional) Store selected theme in localStorage

---

## **Folder Structure**

```
theme-switcher/
│── index.html
│── style.css
└── script.js
```

---

## **Steps to Complete**

1. Create the HTML structure
2. Style both themes in CSS
3. Make the JS toggle the theme
4. Test switching back and forth
5. Clean the layout and fix contrast
6. Push to GitHub or deploy on Netlify

---

## **Optional Enhancements**

* Add transitions for smooth switching
* Add sun/moon icons
* Add a third theme (e.g., blue mode)
* Save theme preference with `localStorage`

---

## **Learning Outcomes**

By finishing this project, you will understand:

* DOM basics
* Events
* Class manipulation
* CSS theming
* Clean file organization




# Theme Switcher — Full JS Toolset

## 1. Select Elements

* `document.querySelector()`
* `document.querySelectorAll()`

**Use:** get the toggle button, get the body, get icons.

---

## 2. Add/Remove Classes

* `element.classList.toggle()`
* `element.classList.add()`
* `element.classList.remove()`
* `element.classList.contains()`

**Use:** switch between `"dark"` / `"light"` classes.

---

## 3. Read/Write Attributes

* `element.getAttribute()`
* `element.setAttribute()`
* `element.removeAttribute()`

**Use:** change icons (`src`, `data-*`), aria attributes.

---

## 4. Manipulate Text

* `element.innerText`
* `element.textContent`

**Use:** update label ("Dark mode", "Light mode").

---

## 5. Event Handling

* `element.addEventListener("click", fn)`
* `element.addEventListener("change", fn)`

**Use:** detect toggle click or switch change.

---

## 6. Local Storage

* `localStorage.setItem("theme", value)`
* `localStorage.getItem("theme")`
* `localStorage.removeItem("theme")`

**Use:** remember the theme after refresh.

---

## 7. Conditional Logic

* `if/else`
* Ternary: `condition ? a : b`

**Use:** decide which theme is active.

---

## 8. CSS Custom Properties (Optional)

JS → CSS:

* `document.documentElement.style.setProperty("--bg", "#000")`

**Use:** dynamic theme values beyond simple classes.

---

## 9. matchMedia (Optional)

* `window.matchMedia("(prefers-color-scheme: dark)").matches`

**Use:** auto-detect system dark mode.

---

## 10. Dataset (Optional)

* `element.dataset.theme = "dark"`

**Use:** store state inside HTML without classes.

---

## Minimal Core Set (Required)

* `querySelector`
* `addEventListener`
* `classList.toggle`
* `localStorage.setItem` / `localStorage.getItem`
* `if(...)`

Everything else is optional.