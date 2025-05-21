const allBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {

    const bookDiv = document.createElement("div");
  bookDiv.style.display = "flex";
  bookDiv.style.alignItems = "center";
  bookDiv.style.marginBottom = "20px";

  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";
  bookImg.style.marginRight = "15px";

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  bookDiv.appendChild(bookImg);
  bookDiv.appendChild(bookInfo);


  section.appendChild(bookDiv);
});