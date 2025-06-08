const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifList = document.getElementById("gifList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(query)}`
    );
    const json = await response.json();

    if (json.data && json.data.images && json.data.images.fixed_height) {
      const gifUrl = json.data.images.fixed_height.url;
      addGif(gifUrl);
      searchInput.value = "";
    } else {
      alert("No GIF found for this category.");
    }
  } catch (error) {
    alert("Error fetching GIF. Please try again.");
    console.error(error);
  }
});

function addGif(url) {
  const container = document.createElement("div");
  container.className = "gif-container";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Random GIF";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", () => {
    gifList.removeChild(container);
  });

  container.appendChild(img);
  container.appendChild(deleteBtn);
  gifList.appendChild(container);
}

deleteAllBtn.addEventListener("click", () => {
  gifList.innerHTML = "";
});
