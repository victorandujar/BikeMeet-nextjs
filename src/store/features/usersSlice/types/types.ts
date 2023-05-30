export interface UserStructure {
  email: string;
  token: string;
  id: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface UserRegistrationStateStructure extends UserState {
  confirmationCode: string;
}
