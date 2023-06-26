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
import { rideEndpoints, userEndpoints } from "@/utils/endpoints/endpoints";
import { useCallback } from "react";
import decodeToken from "jwt-decode";
import { UserStructure } from "@/store/features/usersSlice/types/types";
import { loginUserActionCreator } from "@/store/features/usersSlice/usersSlice";
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
      router.push(rideEndpoints.dashboard);
    },
    [dispatch, router]
  );

  const registerUser = useCallback(
    async (userCredentials: UserRegisterCredentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.register}`,
        userCredentials
      );
      setTimeout(() => router.push("/login"), 2000);

      return { response };
    },
    [router]
  );

  const verifyEmail = async (confirmationCode: UserVerifyEmailStructure) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.verifyEmail}`,
      confirmationCode
    );
  };

  const checkUserIsVerified = async (email: UserCheckEmailStructure) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.getUserIsVerified}`,
      email
    );

    const isUserVerified = response.data as IsUserVerifiedResponse;

    return { isUserVerified };
  };

  const checkUserEmail = async (email: UserCheckEmailStructure) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.findUserEmail}`,
      email
    );

    return { response };
  };

  const resetUserPassword = async (password: string, userId: string) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.restorePassword}${userId}`,
      {
        params: userId.toString(),
        password,
      }
    );

    return { response };
  };

  const getUser = async (email: string) => {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.getUser}`,
      email
    );
  };

  return {
    loginUser,
    registerUser,
    verifyEmail,
    checkUserIsVerified,
    checkUserEmail,
    resetUserPassword,
    getUser,
  };
};

export default useUser;
