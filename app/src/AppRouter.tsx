import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import InitialPage from "./pages/initialPage/InitialPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import { typeUserEnum } from "./constants/enums/typeUserEnum.tsx";
import About from "./pages/about/About.tsx";
import Prices from "./pages/prices/Prices.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Login from "./pages/logIn/Login.tsx";
import Signup from "./pages/signUp/SignUp.tsx";
import NotFound from "./pages/notFound/NotFound";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route
          path="/login/admin"
          element={
            <PrivateRoute accesControl={[typeUserEnum.ADMIN]}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
