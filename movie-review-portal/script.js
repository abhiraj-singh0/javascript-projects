// 1. Setup your API Key
const API_KEY = "71fdec66"; // MUST replace this with your real key!

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const movieGrid = document.getElementById("movie-grid");
const clearBtn = document.getElementById("clear-btn");

// 2. Show/Hide the 'X' button based on if there is text in the input
searchInput.addEventListener("input", function () {
  if (searchInput.value.length > 0) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
});

// 3. Clear the input when the 'X' is clicked
clearBtn.addEventListener("click", function () {
  searchInput.value = "";
  clearBtn.style.display = "none";
  searchInput.focus(); // Puts the blinking cursor back in the box
});

// 4. Handle the Search Submission
searchForm.addEventListener("submit", function (event) {
  // THIS LINE IS CRITICAL: It stops the page from reloading and clearing out!
  event.preventDefault();

  const searchTerm = searchInput.value;
  if (searchTerm) {
    fetchMovies(searchTerm);
  }
});

// 5. Fetch the Data
async function fetchMovies(searchQuery) {
  const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      renderMovies(data.Search);
    } else {
      movieGrid.innerHTML = `<h2>No movies found for "${searchQuery}"</h2>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    movieGrid.innerHTML = `<h2>Something went wrong. Please check the console.</h2>`;
  }
}

// 6. Draw the HTML
function renderMovies(moviesArray) {
  movieGrid.innerHTML = "";

  moviesArray.forEach((movie) => {
    const posterSrc =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/200x300?text=No+Poster";

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
    <img src="${posterSrc}" alt="${movie.Title}">
    <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        
        <!-- NEW CODE: Adding the review text area and button -->
        <textarea class="review-box" placeholder="Write your review here..."></textarea>
        <button class="save-btn">Save Review</button>
    </div>
        `;

    movieGrid.appendChild(movieCard);
  });
}
