import { useMutation } from "@tanstack/react-query";
import { IApiGenericResponse } from "../../../types/common.types";
import { ILoginParams, ILoginResponse } from "../../../types/user.types";

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const login = async (_: ILoginParams): Promise<IApiGenericResponse<ILoginResponse>> => {
  await wait(2000);
  return {
    success: true,
    errorMessage: false,
    data: {
      firstName: "Rushil",
      lastName: "Patel",
      email: "rushil.patel@rp.com",
      token: "abc123xyz123",
    },
  };
};

export const useLoginMutation = () => {
  const { mutate, isPending } = useMutation<
    IApiGenericResponse<ILoginResponse>,
    Error,
    ILoginParams
  >({
    mutationFn: (params) => login(params),
  });

  return {
    mutate,
    isLoginLoading: isPending,
  };
};
