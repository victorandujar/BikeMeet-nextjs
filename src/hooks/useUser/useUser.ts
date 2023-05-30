import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  CustomTokenPayload,
  LoginApiResponse,
  UserCredentials,
  UserRegisterCredentials,
  UserVerifyEmailStructure,
} from "./types";
import axios from "axios";
import userEndpoints from "@/utils/userEndpoints/userEndpoints";
import { useCallback } from "react";
import decodeToken from "jwt-decode";
import { UserStructure } from "@/store/features/usersSlice/types/types";
import {
  loginUserActionCreator,
  registerUserActionCreator,
} from "@/store/features/usersSlice/usersSlice";
import { useRouter } from "next/navigation";

const useUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const loginUser = useCallback(
    async (user: UserCredentials, isRemembered: boolean) => {
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

      if (isRemembered) {
        localStorage.setItem("token", token);
      }
      router.push("/home");
    },
    [dispatch, router]
  );

  const registerUser = useCallback(
    async (userCredentials: UserRegisterCredentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.register}`,
        userCredentials
      );

      const { confirmationCode } = response.data as UserVerifyEmailStructure;

      dispatch(
        registerUserActionCreator({
          confirmationCode,
          isLogged: false,
          email: "",
          token: "",
          id: "",
        })
      );

      router.push("/login");
    },
    [dispatch, router]
  );

  const verifyEmail = async (confirmationCode: UserVerifyEmailStructure) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.verifyEmail}`,
      confirmationCode
    );
  };

  return { loginUser, registerUser, verifyEmail };
};

export default useUser;
