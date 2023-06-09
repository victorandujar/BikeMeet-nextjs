import { UserEndpointsStructure } from "./types/types";

const userEndpoints: UserEndpointsStructure = {
  users: "/users",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  getUserIsVerified: "/user-verify",
  findUserEmail: "/recovery-password",
  signup: "sign-up",
};

export default userEndpoints;
