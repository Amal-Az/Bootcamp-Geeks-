const containerDiv = document.getElementById("container");
console.log(containerDiv);

const firstUl = document.querySelectorAll(".list")[0];
firstUl.children[1].textContent = "Richard";

const secondUl = document.querySelectorAll(".list")[1];
secondUl.removeChild(secondUl.children[1]);

const allUls = document.querySelectorAll("ul.list");
allUls.forEach(ul => {
  ul.children[0].textContent = "TonNom";
});

allUls.forEach(ul => ul.classList.add("student_list"));

firstUl.classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

Array.from(secondUl.children).forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

Array.from(firstUl.children).forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
});
document.body.style.fontSize = "18px";

if (containerDiv.style.backgroundColor === "lightblue") {
  const user1 = firstUl.children[0].textContent;
  const user2 = firstUl.children[1].textContent;
  alert(`Hello ${user1} and ${user2}`);
}