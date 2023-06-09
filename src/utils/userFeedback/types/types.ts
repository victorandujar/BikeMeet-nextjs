export interface ErrorCodesStructure {
  notFound: number;
  wrongCredentials: number;
  conflict: number;
}

export interface ErrorMessagesSturcutre {
  networkFail: string;
  wrongCredentials: string;
  notFoundEmail: string;
  serverError: string;
  badRequestRestorPassword: string;
}

export interface SuccessCodeStatusStructure {
  created: number;
  found: number;
}

export interface SuccessMessagesStructure {
  emailSent: string;
  passwordRestore: strin;
}
