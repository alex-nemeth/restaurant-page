function createContactPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Contact";
    pageContent.appendChild(header);

    const par = document.createElement("div");
    par.innerHTML = `<p>Restaurant Name</p>
                 <p>Phone Number: +421 987 654 321</p>
                 <p>Email: restaurant@mail.com</p>
                 <p>Address: Brook Lane 21, Creeksburg, USA</p>`;

    pageContent.appendChild(par);
    content.appendChild(pageContent);
}

export default createContactPage;
