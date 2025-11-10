import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
}

function PrivateRoute({ children }: Props) {
  const { user, isAuthenticated } = useAuth();

  // if user is not authenticated, redirect to initial page
  if (!isAuthenticated || !user) return <Navigate to="/" />;

  // if user is authenticated
  return <>{children}</>;
}

export default PrivateRoute;
