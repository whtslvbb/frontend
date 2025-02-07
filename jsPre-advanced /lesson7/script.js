const getBySelector = (selector) => document.querySelector(selector);

const form = document.forms["data"];

const showInfo = (movieData) => {
  getBySelector(".blackBoard").style.display = "block";
  getBySelector('.infoPoster').src = `${movieData.Poster}`

  const info = getBySelector('.spaceForInfo').children
  info[0].textContent = movieData.Title
  info[1].textContent = movieData.Plot
  info[2].innerHTML = `<b>Written by:</b>  ${movieData.Writer}`
  info[3].innerHTML = `<b>Directed by:</b>  ${movieData.Director}`
  info[4].innerHTML = `<b>Starring:</b>  ${movieData.Actors}`
  info[5].innerHTML = `<b>BoxOffice:</b>  ${movieData.BoxOffice}`
  info[6].innerHTML = `<b>Awards:</b>  ${movieData.Awards}`
  info[7].innerHTML = `<b>Ratings:</b> `
  movieData.Ratings.forEach(({Source , Value}) => {
    info[7].innerHTML += `${Source}, ${Value}; `
  })
};

const getInfo = async (index) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=e2d8d7b5&i=${index}`,
      { method: "GET" }
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    showInfo(data);
  } catch (error) {
    console.error(error);
  }
};

const createList = (films) => {
  getBySelector(".films").innerHTML = "";
  films.forEach((value) => {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${value.Poster}`;

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = value.Title;

    const type = document.createElement("div");
    type.className = "type text";
    type.textContent = value.Type;

    const year = document.createElement("div");
    year.className = "year text";
    year.textContent = value.Year;

    const button = document.createElement("button");
    button.textContent = "More details";
    button.addEventListener("click", () => {
      getInfo(value.imdbID);
    });

    wrapper.appendChild(poster);
    wrapper.appendChild(name);
    wrapper.appendChild(type);
    wrapper.appendChild(year);
    wrapper.appendChild(button);

    getBySelector(".films").appendChild(wrapper);
  });
};

const getFilms = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=e2d8d7b5&s=${encodeURIComponent(form.movieName.value)}`,
      { method: "GET" }
    );
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    createList(data.Search);
  } catch (error) {
    console.error(error);
  }
};

getBySelector(".blackBoard").addEventListener("click", () => {
  getBySelector(".blackBoard").style.display = "none";
});

data.button.addEventListener("click", (e) => {
  e.preventDefault();
  getFilms();
  form.movieName.value = "";
});
