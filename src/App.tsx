import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CpuBoard from "./pages/CpuBoard";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/theme";
import MemoryPage from "./pages/MemoryPage";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mainTheme}>
        <HashRouter>
          <Routes>
            <Route element={<Navigate to="/cpu" />} path="/" />
            <Route element={<CpuBoard />} path="/cpu" />
            <Route element={<MemoryPage />} path="/memory" />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
