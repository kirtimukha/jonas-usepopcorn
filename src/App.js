import { useEffect, useState } from 'react';

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = 'ca2fa0b9';

export default function App() {

  function Logo (){
    return(
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    )
  }
  function NumResults (){
    return(
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    )
  }
  function Search (){
    const [query, setQuery] = useState("");
    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    )
  }
  function NavBar({children}) {
    return (
      <>
        <nav className="nav-bar">
          <Logo />
          {children}
        </nav>
      </>
    );
  }
  function Main ({children}){
    return (
      <main className="main">
        {children}
      </main>
    )
  }
  function WatchedMovieList({watched}){
    return (
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie}/>
        ))}
      </ul>
    )
  }
  function WatchedMovie({movie}){
    return (
      <li >
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </li>
    )
  }
  function WatchedSummary ({watched }){
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));
    return (
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    )
  }
  function Box({children}){
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && children }
      </div>)
  }
  function MovieList({movies}){
    return(<ul className="list">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie}/>
        ))}
      </ul>
    )
  }
  function Movie( { movie }){
    return(<li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>)
  }
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  /*
  1. 최상단. 페치시 직접 유즈 스테이트 사용 => 무한 루프에 빠짐
  fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
    .then(res => res.json()).then(data=> setMovies(data.Search))*/
  //setWatched([]);

  // 2. 기본적인 프라미스 함수를 async function 으로 변경하기
  // 프라미스를 핸들링할 때 어싱크 function 사용하면 편하다.
  // 아래의 코드를 에러 발생! Effect callbacks are synchronous to prevent race conditions. Put the async function inside
  // useEffect 안의 async는 일반적인 async(비동기 함수)처럼 promise를 리턴하지 못한다.
  /*useEffect( async function () {
    // 이제 렌더링 후에 페치가 실행됨
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
      .then(res => res.json()).then(data=> setMovies(data.Search))
  }, [])*/

  // 따라서 위와 같이 직접 어싱크 함수를 쓰는 대신
  // 새로운 펑션을 만들어서, 그 안에 어싱크를 위치시킨다.
  const query = 'interstellar';

  useEffect(
    function () {
    // 이제 렌더링 후에 페치가 실행됨
    async function fetchMovies() {
     const res = await fetch ( `http://www.omdbapi.com/?apikey=${ KEY }&s=${ query }` )
     const data = await res.json()
     setMovies(data.Search)
      //console.log(movies)//<== stale state가 남아서 빈 배열이 나온다. 18 스트릭모드에서는 유즈이펙트가 2번 불린다.
      console.log(data.Search);
    }
    fetchMovies();
  }, [])


  return (
    <>
      <NavBar >
        <nav className="nav-bar">
          <Search />
          <NumResults movies={movies}/>
        </nav>
      </NavBar>

      <Main movies={movies}>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}