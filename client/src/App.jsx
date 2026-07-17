import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// FIXED: Importing ThemeProvider from the correct location
import { ThemeProvider } from "./providers/ThemeProvider";

// Assuming you still have routing setup for your app
import LandingPage from "./pages/landing/LandingPage";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Marketing Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Placeholder for future authenticated application routes */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}

          {/* Catch-all route: Gracefully handle 404s */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
