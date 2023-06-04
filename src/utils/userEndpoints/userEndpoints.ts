import { UserEndpointsStructure } from "./types/types";

const userEndpoints: UserEndpointsStructure = {
  users: "/users",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  getUserIsVerified: "/user-verify",
};

export default userEndpoints;
