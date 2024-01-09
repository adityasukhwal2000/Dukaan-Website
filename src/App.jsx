import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/mainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/orders" element={<MainPage />} />
        <Route path="/products" element={<MainPage />} />
        <Route path="/delivery" element={<MainPage />} />
        <Route path="/marketing" element={<MainPage />} />
        <Route path="/analytics" element={<MainPage />} />
        <Route path="/payments" element={<MainPage />} />
        <Route path="/tools" element={<MainPage />} />
        <Route path="/discounts" element={<MainPage />} />
        <Route path="/audience" element={<MainPage />} />
        <Route path="/appearence" element={<MainPage />} />
        <Route path="/plugins" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
