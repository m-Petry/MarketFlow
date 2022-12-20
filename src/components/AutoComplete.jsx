import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

export const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Request stock symbols from Finnhub API database
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        });
        if (isMounted) {
          setResults(response.data.result);
        }
      } catch (err) {}
    };

    //only seeks the data if there is >0 letters.If 0, erase the results and returns an empty array:
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
    return () => (isMounted = false);
  }, [search]); //the useeffect will only runs when search change

  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown">
        <input
          style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
          id="search"
          type="text"
          className="form-control"
          placeholder="Search"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <label htmlFor="search">Search</label>
        <ul className="dropdown-menu">
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul>
      </div>
    </div>
  );
};
