import React, { useState } from 'react';

const moviesData = [
  { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
  { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
  { title: "Spirited Away", genre: "Animation", releaseYear: 2001 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(moviesData.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === "All"
    ? moviesData
    : moviesData.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <select onChange={e => setSelectedGenre(e.target.value)} value={selectedGenre}>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => alert(movie.title)}>
            <strong>{movie.title}</strong> – {movie.genre}, {movie.releaseYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
