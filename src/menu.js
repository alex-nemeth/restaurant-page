function createMenuPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    pageContent.appendChild(header);
    header.textContent = "Menu";

    const menu = document.createElement("div");
    pageContent.appendChild(menu);

    const food1 = document.createElement("p");
    food1.textContent = "French Fries";
    pageContent.appendChild(food1);

    const food2 = document.createElement("p");
    food2.textContent = "Pizza";
    pageContent.appendChild(food2);

    const food3 = document.createElement("p");
    food3.textContent = "Burger";
    pageContent.appendChild(food3);

    content.appendChild(pageContent);
}

export default createMenuPage;
