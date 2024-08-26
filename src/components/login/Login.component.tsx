interface ILoginProps {
  login: (username: string, password: string) => void;
  isLoginLoading: boolean;
}
function Login ({ login, isLoginLoading }: ILoginProps) {
  const loginHandler = () => {
    login("test", "test");
  }

  return (
    <div className="flex justify-center m-5">
      <button
        onClick={loginHandler}
        className="bg-indigo-500 p-2 rounded text-white"
        disabled={isLoginLoading}
      >
        Log In
      </button>

    </div>
  )

}

export default Login;
