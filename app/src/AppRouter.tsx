import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home.tsx";
import InitialPage from "./pages/initialPage/InitialPage.tsx";
// import About from "./pages/About.tsx";
// import Prices from "./pages/Prices.tsx";
// import Contact from "./pages/Contact.tsx";
// import Login from "./pages/Login.tsx";
// import Signup from "./pages/Signup.tsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
