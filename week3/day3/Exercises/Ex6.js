const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li"); // Créer le <li>
const textNode = document.createTextNode("Logout"); // Créer le texte
newLi.appendChild(textNode); // Ajouter le texte au <li>

// Ajouter le <li> au <ul>
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);