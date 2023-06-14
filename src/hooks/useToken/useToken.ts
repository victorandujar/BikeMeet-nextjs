import { loginUserActionCreator } from "@/store/features/usersSlice/usersSlice";
import { useAppDispatch } from "@/store/hooks";
import decodeToken from "@/utils/decodeToken";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface useTokenStructure {
  getToken: () => Promise<void>;
}

const useToken = (): useTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);

      dispatch(loginUserActionCreator(user));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
