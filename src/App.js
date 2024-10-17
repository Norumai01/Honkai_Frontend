import React from "react";
import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./components/Social_Hub/Dashboard";
import UserProfile from "./components/Social_Hub/UserProfile";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Empty object will prevent Chakra from applying its global styles
    },
  },
});

// Redirect any users already logged in, into social hub.
const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

// Redirect any users not logged in, to login page.
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PublicRoute> <AuthPage /> </PublicRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            <Route path="/profile/:userId" element={<ProtectedRoute> <UserProfile /> </ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
