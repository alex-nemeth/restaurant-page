const createHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Welcome to our restaurant!";

    const image = document.createElement("img");
    image.src = "../src/img/image.jpg";

    const par = document.createElement("p");
    par.textContent = `Fusce eu purus urna. Nunc eleifend a orci vitae eleifend. Etiam
    vitae massa augue. Praesent tristique tincidunt posuere.
    Suspendisse vel condimentum augue. Nullam sit amet turpis
    faucibus, egestas elit sed, cursus enim. Cras blandit rhoncus
    lacus sed bibendum. Sed sagittis at tortor quis gravida.`;

    pageContent.appendChild(header);
    pageContent.appendChild(image);
    pageContent.appendChild(par);
    content.appendChild(pageContent);
};

export default createHomePage;
