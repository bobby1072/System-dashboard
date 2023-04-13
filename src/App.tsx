import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default App;
