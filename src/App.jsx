import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockOverviewPage } from "./assets/StockOverviewPage";
import "./App.css";
import { StockDetailPage } from "./assets/StockDetailPage";

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage />} />
          {/* path for page sotock symbol with dynamic variable */}
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
