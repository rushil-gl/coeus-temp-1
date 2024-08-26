import Login from "../../components/login/Login.component";
import { useLoginPage } from "./useLoginPage";

function LoginPage () {
  const { login, isLoginLoading } = useLoginPage();

  return (
   <Login login={login} isLoginLoading={isLoginLoading} />
  )
}

export default LoginPage;
