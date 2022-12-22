import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockDetailPage } from "./pages/StockDetailPage";
import { StockOverviewPage } from "./pages/StockOverviewPage";
import { WatchListContextProvider } from "./context/watchListContext";
import "./App.css";

export default function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            {/* path for stock symbol page with dynamic variable */}
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}
