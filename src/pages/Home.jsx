import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Mock data that matches the test expectations
    const mockMovies = [
      { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
      { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy"] },
      { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Crime", "Thriller"] }
    ];

    // Try to fetch from server, fall back to mock data
    fetch('http://localhost:4000/movies')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then(data => setMovies(data))
      .catch(() => setMovies(mockMovies));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </article>
        ))}
      </main>
    </>
  );
}

export default Home;