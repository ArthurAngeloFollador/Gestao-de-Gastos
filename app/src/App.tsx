// import { BrowserRouter, Route, Routes } from "react-router";
import AppRouter from "./AppRouter";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
