import { useAppDispatch } from "@/store/hooks";
import { CustomTokenPayload, LoginApiResponse, UserCredentials } from "./types";
import axios from "axios";
import userEndpoints from "@/utils/userEndpoints/userEndpoints";
import { useCallback } from "react";
import decodeToken from "jwt-decode";
import { UserStructure } from "@/store/features/usersSlice/types/types";
import { loginUserActionCreator } from "@/store/features/usersSlice/usersSlice";
import { useRouter } from "next/navigation";

const useUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const loginUser = useCallback(
    async (user: UserCredentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.login}`,
        user
      );

      const { token } = response.data as LoginApiResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { sub: id, email } = tokenPayload;

      const userToLogin: UserStructure = {
        email,
        id,
        token,
      };

      dispatch(loginUserActionCreator(userToLogin));

      localStorage.setItem("token", token);
      router.push("/home");
    },
    [dispatch, router]
  );

  return { loginUser };
};

export default useUser;
