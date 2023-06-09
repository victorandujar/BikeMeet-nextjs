import {
  SuccessCodeStatusStructure,
  SuccessMessagesStructure,
} from "./types/types";

export const sucessManagerStatusCodes: SuccessCodeStatusStructure = {
  created: 201,
  found: 200,
};

export const successManagerMessages: SuccessMessagesStructure = {
  emailSent: "Email sent. Check your inbox email at",
  passwordRestore: "Your password has been updated!",
};
