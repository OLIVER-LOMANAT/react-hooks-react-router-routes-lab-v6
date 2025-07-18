import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirector] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then(data => setDirector(data))
    .catch(error => console.error(error)
    )
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map(director => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
         
        </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
