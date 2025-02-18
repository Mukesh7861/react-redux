import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Login from "./Login";

function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}

export default App;
