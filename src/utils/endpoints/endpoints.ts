import { RideEndpointsStructure, UserEndpointsStructure } from "./types/types";

export const userEndpoints: UserEndpointsStructure = {
  users: "/users",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  getUserIsVerified: "/user-verify",
  findUserEmail: "/recovery-password",
  signup: "/sign-up",
  restorePassword: "/restore-password/",
  recoveryEmailPassword: "/recovery-email/validate-email",
  getUser: "/user",
};

export const rideEndpoints: RideEndpointsStructure = {
  rides: "/rides",
  getAllRides: "/",
  dashboard: "/dashboard",
};
