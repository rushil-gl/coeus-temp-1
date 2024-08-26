import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ReactNode, useEffect } from "react";

function PrivateRoute({ children }: {children: ReactNode}) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.token) {
      navigate("/login");
    }
  })

  return (
    <>
      {children}
    </>
  );
}

export default PrivateRoute;
