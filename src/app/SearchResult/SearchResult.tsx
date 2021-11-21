import styles from './SearchResult.module.css';

export type SearchResultProps = {
  backdrop_path: object;
  name: string;
};

function SearchResult({ name, backdrop_path }: SearchResultProps): JSX.Element {
  if (name) {
    return (
      <div className={styles.container}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <h3>{name}</h3>
      </div>
    );
  } else undefined;
}

export default SearchResult;
