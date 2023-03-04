import createHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import clearContent from "./clearContent";

function generateTabs() {
    const content = document.querySelector("#content");
    const tabs = document.createElement("div");
    const homeBtn = document.createElement("button");
    homeBtn.addEventListener("click", () => {
        clearContent();
        createHomePage();
    });
    const menuBtn = document.createElement("button");
    menuBtn.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    });
    const contactBtn = document.createElement("button");
    contactBtn.addEventListener("click", () => {
        clearContent();
        createContactPage();
    });
    tabs.appendChild(homeBtn);
    tabs.appendChild(menuBtn);
    tabs.appendChild(contactBtn);
    tabs.classList.add("tabs");
    content.appendChild(tabs);
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
}

export default generateTabs;
