import { useState } from 'react';

function NavBar({movies}) {
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
      Found <strong>{movies.length}}</strong> results
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
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults/>
      </nav>
    </>
  );
}

export default NavBar