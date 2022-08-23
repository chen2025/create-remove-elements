/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const urlArray = url.split('/');
        const breed = urlArray[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        let newImgElement = document.createElement("img");
        let newFigcaptionElement = document.createElement("figcaption");
        let newFigureElement = document.createElement("figure");
        let newLiElement = document.createElement("li");

        newImgElement.setAttribute("src", url);
        newFigcaptionElement.innerText = breed;

        newFigureElement.appendChild(newImgElement);
        newFigureElement.appendChild(newFigcaptionElement);
        newLiElement.appendChild(newFigureElement);

        document.body.children[1].children[0].appendChild(newLiElement);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    document.body.children[1].children[0].children[0].remove();
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    document.body.children[1].children[0].children[document.body.children[1].children[0].children.length - 1].remove();

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
