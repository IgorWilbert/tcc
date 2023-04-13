import { BrowserRouter, Routes, Route } from "react-router-dom";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";

const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/flashcards" element={<FlashCards />} />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
