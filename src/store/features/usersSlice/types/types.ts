export interface UserStructure {
  email: string;
  token: string;
  id: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface RiderProfileStructure {
  name: string;
  valoration: number;
  ridesCount: number;
  avatar: string;
}
