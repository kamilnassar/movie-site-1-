import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import { movies } from "./data/movies.js";

function App() {
  const topRated = movies.filter(movie => movie.rating >= 8.7);
  const animationMovies = movies.filter(movie => movie.genre === "Animation");

  return (
    <>
      <Header />
      <main className="page container">
        <section className="page__intro">
          <h1>הקטלוג</h1>
          <p>סרטים שכדאי לראות — הישנים הטובים והחדשים.</p>
        </section>

        <MovieList title="הכי מדורגים" movies={topRated} />
        <MovieList title="כל הסרטים" movies={movies} />
        <MovieList title="Animation Movies: " movies={animationMovies} />

      </main>
      <Footer />
    </>
  );
}

export default App;