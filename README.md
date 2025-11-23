# **Theme Switcher (Light/Dark Mode)**

A simple beginner-friendly project that switches between Light and Dark themes using **HTML**, **CSS**, and **JavaScript**.
Clicking the toggle button updates the entire page theme by adding or removing a CSS class.
This project uses pure fundamentals—no frameworks.

---

## **Project Goals**

* Understand basic DOM selection
* Use event listeners
* Toggle CSS classes
* Build two visual themes
* Keep HTML, CSS, and JS separated and clean

---

## **What I Learned**

### **HTML**

* Some editor extensions warn when a `<button>` has no text.
  This can be fixed with `aria-label`, which provides an accessible name even if the button only uses an icon.
* `aria-label` helps improve accessibility and removes those warnings.

---

### **CSS**

* You can add transitions to multiple elements to make theme changes smooth:

  ```
  html, body, section, button {
    transition: background 0.3s ease, button 0.3s ease, color 0.3s ease, border 0.3s ease;
  }
  ```

  or simply:

  ```
  transition: all 0.3s ease;
  ```

* Learned about the `filter` property, which can darken text or elements on hover.

* Using `letter-spacing: -0.02em` is better than percentage values because it has wider browser support.

* Revisited `line-height`, which controls the vertical spacing between lines of text.

* `text-align: center` helps content stay readable and acts as a fallback if layout alignment breaks.

---

### **JavaScript**

* Learned how to use `localStorage.setItem()` and `localStorage.getItem()` to save and load the selected theme.

* Understood that `.innerHTML` is risky when using user-generated content because it can cause XSS attacks.
  Use `.innerText` for safe text output.

* Example:

  ```
  button.innerHTML = "<b>Dark</b>";   // safe only with fixed content
  element.innerHTML = input.value;    // dangerous if input is from user
  ```

* Learned how system theme detection works and how to simplify the logic:

  ```
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "Dark"
    : "Light";
  ```

* Ternary operators make short, two-outcome logic easier to read than a long `if/else`.

* The toggle button should show **the opposite theme** (“Dark” when the current theme is Light, and vice-versa).
