let backgroundI = document.querySelector("html")
let bod = document.querySelector("body")
let title = document.createElement("h1")
let para = document.createTextNode("Coin Object")
title.appendChild(para);
bod.appendChild(title);
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.alignItems = "center";
title.style.color = "red";
backgroundI.style.color = "red";
backgroundI.style.background = "black";
const coin = {
    state: 0,
    flip: function () {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.floor(Math.random() * 2);
        console.log(this.state)

        return this.state

    },

    toString: function () {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        // const string; //document.createElement("div")
        return (this.state === 0) ? "Heads" : "Tails"

    },
    toHTML: function () {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.

        if (this.state === 0) {
            image.src = "./Images/liberty-coin-front.png"
        } else {
            image.src = "./Images/liberty-coin-back.png"
        }

        return document.body.appendChild(image)

    }
};
function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.

    for (let i = 0; i < 20; i += 1) {
        coin.flip()
        results.push(coin.toString())
    }
    let sResults = document.createTextNode(results)
    return document.body.appendChild(sResults)

}
function display20Images() {
    const results = [];
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
    for (let i = 0; i < 20; i += 1) {
        coin.flip()
        results.push(coin.toHTML())
        // let hImage = document.()
        // document.body.appendChild(coin.toHTML)
    }

    return results
}
display20Flips()
display20Images()



