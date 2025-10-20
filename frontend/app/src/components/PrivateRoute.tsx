import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { typeUserEnum } from "../constants/enums/typeUserEnum";
import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
  accesControl: typeUserEnum[] | undefined;
}

function PrivateRoute({ children, accesControl }: Props) {
  const [ready, setReady] = useState(false);
  const { user, onLoadUser } = useAuth();

  useEffect(() => {
    onLoadUser();
    setReady(true);
  }, [onLoadUser]);

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!user) {
    if (accesControl && !accesControl.includes(typeUserEnum.USER)) {
      return <Navigate to="/login/admin" />;
    }
    return <Navigate to="/login" />;
  }
  if (accesControl && !accesControl.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
}

export default PrivateRoute;
