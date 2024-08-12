import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <article>
          {directors.map((director) => (
            <div key={director.id}>
              <h2 key={director.id}>{director.name}</h2>
              <ul>
                {director.movies.map((directorMovie, index) => (
                  <li key={index}>{directorMovie}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </main>
    </>
  );
}

export default Directors;
