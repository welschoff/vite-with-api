import { useEffect, useState } from 'react';
import SearchResult, {
  SearchResultProps,
} from '../components/SearchResult/SearchResult';
import styles from './Search.module.css';

function Search(): JSX.Element {
  const [results, setResults] = useState<SearchResultProps[] | null>([]);
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState<string | undefined>(undefined);

  const getSeries = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=79f8888252c85fbe294c7596aa7067d9&query=${query}`
    );
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  useEffect(() => {
    getSeries();
  }, [query]);

  return (
    <div className={styles.container}>
      <form className={styles.search}>
        <input
          type="text"
          placeholder="Search Series"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        {/* <button
          type="submit"
          className={styles.button}
          onSubmit={(event) => {
            event.preventDefault;
            setQuery(search);
          }}
        >
          Search
        </button> */}
      </form>
      <div className={styles.results}>
        {results?.map((result) => (
          // eslint-disable-next-line react/jsx-key
          <SearchResult poster_path={result.poster_path} name={result.name} />
        ))}
      </div>
    </div>
  );
}

export default Search;
