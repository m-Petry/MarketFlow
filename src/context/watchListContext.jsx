import { createContext } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  return (
    <WatchListContext.Provider
      value={{ watchList }}
    ></WatchListContext.Provider>
  );
};
