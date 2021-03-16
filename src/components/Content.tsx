import { MovieCard } from "./MovieCard";

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="content">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>
      <div className="container">
        <main>
          <div className="movies-list">
            {movies.map((movie) => {
              return (
                <MovieCard
                  title={movie.Title}
                  poster={movie.Poster}
                  runtime={movie.Runtime}
                  rating={movie.Ratings[0].Value}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
