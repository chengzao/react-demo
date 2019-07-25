import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');
  const [search, setSearch] = useState('react');
  const [hide, setDisplay] = useState(false);
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + search);
      if (!ignore) setData(result.data);
    }
    fetchData();

    return () => { ignore = true; }
  }, [search]);

  const handleChange = event => setQuery(event.target.value);

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <button type="button" onClick={() => setDisplay(preVal => preVal = !preVal)}>{hide ? '展开': '隐藏'}</button>
      {
        hide ? null : (<ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}

export default SearchResults
