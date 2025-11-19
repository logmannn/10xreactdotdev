import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { theme } from "./theme";
import { AppRoutes } from "./routes";
import { Navigation } from "./components/navigation/navigation";
import "./i18n/config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Navigation />
          <Box component="main" sx={{ flex: 1 }}>
            <AppRoutes />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
