import styles from './SearchResult.module.css';

export type SearchResultProps = {
  poster_path: object;
  name: string;
};

function SearchResult({ name, poster_path }: SearchResultProps): JSX.Element {
  if (name) {
    return (
      <div className={styles.container}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h3>{name}</h3>
      </div>
    );
  } else return <div></div>;
}

export default SearchResult;
