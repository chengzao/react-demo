import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [hide, setDisplay] = useState(false)

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(url);
        if (!ignore) setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();

    return () => { ignore = true; }
  }, [url]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button type="button" onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>
        Search
      </button>
      <button type="button" onClick={() => setDisplay(preVal => preVal = !preVal)}>{hide ? '展开' : '隐藏'}</button>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul className={hide ? 'hide': ''}>
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
