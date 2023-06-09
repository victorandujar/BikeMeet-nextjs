import { ErrorCodesStructure, ErrorMessagesSturcutre } from "./types/types";

export const errorsCodeStatus: ErrorCodesStructure = {
  notFound: 404,
  wrongCredentials: 401,
  conflict: 409,
};

export const errorsMessages: ErrorMessagesSturcutre = {
  networkFail: "Network Error",
  notFoundEmail: "Email not found. Try again",
  wrongCredentials: "Wrong credentials",
  serverError: "Ooops. Something went wrong. Try again!",
};
