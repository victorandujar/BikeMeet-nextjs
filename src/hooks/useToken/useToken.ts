import { loginUserActionCreator } from "@/store/features/usersSlice/usersSlice";
import { useAppDispatch } from "@/store/hooks";
import decodeToken from "@/utils/decodeToken";
import { useCallback } from "react";

interface UseTokenStructure {
  getToken: () => Promise<void>;
  removeToken: () => {};
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);

      dispatch(loginUserActionCreator(user));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
