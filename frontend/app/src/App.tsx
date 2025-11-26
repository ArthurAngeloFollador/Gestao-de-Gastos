// import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
