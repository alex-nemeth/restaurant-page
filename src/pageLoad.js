import createHomePage from "./restaurant";
import createContactPage from "./contact";
import generateTabs from "./tabs";
import clearContent from "./clearContent";

function pageLoad() {
    generateTabs();
    createHomePage();
}

export default pageLoad;
