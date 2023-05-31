export interface UserStructure {
  email: string;
  token: string;
  id: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}
