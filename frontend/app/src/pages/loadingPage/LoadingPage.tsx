import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import LoadingContainer from "./LoadingPageStyle";
import { useLocation } from "react-router-dom";

function LoadingPage({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) {
    return (
      <LoadingContainer>
        <HashLoader color="#36d7b7" size={100} />
      </LoadingContainer>
    );
  }

  return <div key={location.pathname}>{children}</div>;
}

export default LoadingPage;
