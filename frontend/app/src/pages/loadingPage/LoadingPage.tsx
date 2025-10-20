import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import LoadingContainer from "./LoadingPageStyle";
import { useLocation } from "react-router-dom";

function LoadingPage({ children }: { children: React.ReactNode }) {
    
    const location = useLocation();

    const [loading, setLoading] = useState(false);
    
   useEffect(() => {
    setLoading(true);
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

    return (
        <>
            {loading ? (
                <LoadingContainer>
                    <HashLoader color="#36d7b7" loading={loading} size={100} />
                </LoadingContainer>
            ) : (
                <>{children}</>
            )}
        </>
    )

}

  export default LoadingPage;