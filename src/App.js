import React from "react";
import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./components/Social_Hub/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Empty object will prevent Chakra from applying its global styles
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
