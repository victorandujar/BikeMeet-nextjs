import {
  UserCheckEmailStructure,
  UserRegisterCredentials,
  UserVerifyEmailStructure,
  IsUserVerifiedResponse,
} from "./types";
import axios from "axios";
import endpoints from "@/utils/endpoints/endpoints";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const useUser = () => {
  const router = useRouter();

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

  const getUser = async (email: UserCheckEmailStructure) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.users}${endpoints.getUser}`,
      email
    );

    return data;
  };

  return {
    registerUser,
    verifyEmail,
    checkUserIsVerified,
    checkUserEmail,
    resetUserPassword,
    getUser,
  };
};

export default useUser;
