import { UserEndpointsStructure } from "./types/types";

const userEndpoints: UserEndpointsStructure = {
  users: "/users",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  getUserIsVerified: "/user-verify",
  findUserEmail: "/recovery-password",
  signup: "/sign-up",
  restorePassword: "/restore-password/",
  recoveryEmailPassword: "/recovery-email/validate-email",
  home: "/home",
};

export default userEndpoints;
