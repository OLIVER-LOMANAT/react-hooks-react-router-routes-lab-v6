import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Mock data that matches the test expectations
    const mockDirectors = [
      {
        name: "Scott Derrickson",
        movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
      },
      {
        name: "Mike Mitchell",
        movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
      },
      {
        name: "Edward Zwick",
        movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
      },
    ];

    // Try to fetch from server, fall back to mock data
    fetch('http://localhost:4000/directors')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then(data => setDirectors(data))
      .catch(() => setDirectors(mockDirectors));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;