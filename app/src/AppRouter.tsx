import { BrowserRouter, Route, Routes } from "react-router-dom";
import { typeUserEnum } from "./constants/enums/typeUserEnum.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import InitialPage from "./pages/initialPage/InitialPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import About from "./pages/about/About.tsx";
import Accounts from "./pages/accounts/Accounts.tsx";
import Prices from "./pages/prices/Prices.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Login from "./pages/logIn/Login.tsx";
import Signup from "./pages/signUp/SignUp.tsx";
import NotFound from "./pages/notFound/NotFound";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import LoadingPage from "./pages/loadingPage/LoadingPage.tsx";
import Transactions from "./pages/transactions/Transactions.tsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<InitialPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Private routes */}
          <Route
            path="/login/admin"
            element={
              <PrivateRoute accesControl={[typeUserEnum.ADMIN]}>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute accesControl={[typeUserEnum.ADMIN, typeUserEnum.USER]}>
                <Dashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              // <PrivateRoute accesControl={[typeUserEnum.ADMIN, typeUserEnum.USER]}>
                <Transactions />
              // </PrivateRoute>
            }
          />
          <Route
            path="/accounts"
            element={
              // <PrivateRoute accesControl={[typeUserEnum.USER]}>
                <Accounts />
              // </PrivateRoute>
            }
          />

          {/* Error routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoadingPage>
    </BrowserRouter>
  );
}

export default AppRouter;
