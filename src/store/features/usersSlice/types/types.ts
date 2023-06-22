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
  rate: number;
  rides: number;
  image: string;
}
