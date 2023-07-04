import { useAppDispatch } from "@/store/hooks";
import {
  CustomTokenPayload,
  LoginApiResponse,
  UserCredentials,
  UserCheckEmailStructure,
  UserRegisterCredentials,
  UserVerifyEmailStructure,
  IsUserVerifiedResponse,
} from "./types";
import axios from "axios";
import endpoints from "@/utils/endpoints/endpoints";
import { useCallback } from "react";
import decodeToken from "jwt-decode";
import { UserStructure } from "@/store/features/usersSlice/types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "@/store/features/usersSlice/usersSlice";
import { useRouter } from "next/navigation";
import useToken from "../useToken/useToken";
import { useSession, signOut } from "next-auth/react";

const useUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { removeToken } = useToken();

  const { data: session } = useSession();

  const loginUser = useCallback(
    async (user: UserCredentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.login}`,
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

      router.push(endpoints.dashboard);
    },
    [dispatch, router]
  );

  const registerUser = useCallback(
    async (userCredentials: UserRegisterCredentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.register}`,
        userCredentials
      );
      setTimeout(() => router.push("/login"), 2000);

      return { response };
    },
    [router]
  );

  const verifyEmail = async (confirmationCode: UserVerifyEmailStructure) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.verifyEmail}`,
      confirmationCode
    );
  };

  const checkUserIsVerified = async (email: UserCheckEmailStructure) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.getUserIsVerified}`,
      email
    );

    const isUserVerified = response.data as IsUserVerifiedResponse;

    return { isUserVerified };
  };

  const checkUserEmail = async (email: UserCheckEmailStructure) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.findUserEmail}`,
      email
    );

    return { response };
  };

  const resetUserPassword = async (password: string, userId: string) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.restorePassword}${userId}`,
      {
        params: userId.toString(),
        password,
      }
    );

    return { response };
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());

    if (session) {
      signOut();
    }

    router.push(endpoints.login);
  };

  const getUser = async (email: UserCheckEmailStructure) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.getUser}`,
      email
    );

    return data;
  };

  return {
    loginUser,
    registerUser,
    verifyEmail,
    checkUserIsVerified,
    checkUserEmail,
    resetUserPassword,
    logoutUser,
    getUser,
  };
};

export default useUser;
