import React, { useState,useEffect } from "react";
import axios from 'axios';

const useHackerNewsApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

function SearchResults() {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );
  const [hide, setDisplay] = useState(false)
  return (
    <div>
      <form onSubmit={event => {
        doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        event.preventDefault();
      }}>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
        <button type="button" onClick={() => setDisplay(preVal => preVal = !preVal)}>{hide ? '展开' : '隐藏'}</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul className={hide ? 'hide' : ''}>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default SearchResults
