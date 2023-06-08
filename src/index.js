import landingRenderer from "./landing.js";
import aboutRenderer from "./about.js";
import menuRenderer from "./menu.js";
import contactRenderer from "./contact.js";

const content = document.querySelector("#content");
const createRenderer = (func, content) => () => func(content);
const renderLanding = createRenderer(landingRenderer, content);
const renderAbout = createRenderer(aboutRenderer, content);
const renderMenu = createRenderer(menuRenderer, content);
const renderContact = createRenderer(contactRenderer, content);

renderLanding();

const clearContent = () => {
  content.innerHTML = "";
};

const aboutLink = document.querySelector('a[href="#about"]');
const menuLink = document.querySelector('a[href="#menu"]');
const contactLink = document.querySelector('a[href="#contact"]');

document.addEventListener("DOMContentLoaded", () => {
  renderLanding();

  aboutLink.addEventListener("click", function () {
    clearContent();
    renderAbout();
  });

  menuLink.addEventListener("click", () => {
    clearContent();
    renderMenu();
  });

  contactLink.addEventListener("click", () => {
    console.log("Running");
    clearContent();
    renderContact();
  });
});
