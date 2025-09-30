export const fetchMovieData = async (title, apiKey) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }

  return data;
};
