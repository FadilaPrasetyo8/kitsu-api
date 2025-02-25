import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import DetailPages from "./pages/DetailPages";
import { Global } from "./components/styles/Global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
