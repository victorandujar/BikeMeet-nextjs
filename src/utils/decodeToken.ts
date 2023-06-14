import jwt from "jwt-decode";
import { type CustomTokenPayload } from "../hooks/useUser/types";
import { UserStructure } from "@/store/features/usersSlice/types/types";

const decodeToken = (token: string): UserStructure => {
  const { sub: id, email }: CustomTokenPayload = jwt(token);

  const user: UserStructure = {
    token,
    id,
    email,
  };

  return user;
};

export default decodeToken;
