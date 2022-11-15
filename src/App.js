import { Route, Routes } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="coins/:id" element={<CoinDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
