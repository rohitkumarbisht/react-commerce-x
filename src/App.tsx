import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";

import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import BlogPage from "./pages/BlogPage";

function App() {
  // theme toggle (light/dark)
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage toggleTheme={() => setMode(mode === "light" ? "dark" : "light")} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
