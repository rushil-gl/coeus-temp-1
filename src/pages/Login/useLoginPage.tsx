import { useNavigate } from "react-router-dom";
import { useLoginMutation} from "../../hooks/mutations/auth/useLoginMutation";
import { useAuth } from "../../context/AuthContext";

export const useLoginPage = () => {
  const { mutate, isLoginLoading } = useLoginMutation();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const login = (username: string, password: string): void => {
    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.data));
          setUser(data.data);
          navigate("/");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }

  return {
    login,
    isLoginLoading,
  }
};
