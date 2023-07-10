export interface UserDataStructure {
  email: string;
  followers: string[];
  following: string[];
  image: string;
  location: string;
  name: string;
  rate: number;
  rides: number;
  surname: string;
  username: string;
}

export interface User {
  user: UserDataStructure;
}

export interface RiderProfileStructure {
  name: string;
  rate: number;
  rides: number;
  image: string;
}
