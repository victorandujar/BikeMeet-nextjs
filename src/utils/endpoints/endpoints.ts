import { EndpointsStructure } from "./types/types";

const endpoints: EndpointsStructure = {
  users: "/users",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  getUserIsVerified: "/user-verify",
  findUserEmail: "/recovery-password",
  signup: "/sign-up",
  restorePassword: "/restore-password/",
  recoveryEmailPassword: "/recovery-email/validate-email",
  dashboard: "/dashboard",
};

export default endpoints;
