import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InitialPage from "./pages/InitialPage.tsx";
import GlobalStyle from "./components/styles/mainStyle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InitialPage />
    <GlobalStyle />
  </StrictMode>
);
