export interface UserDataStructure {
  user: UserData;
}
export interface UserData {
  name: string;
  surname: string;
  username: string;
  email: string;
  followers: string[];
  following: string[];
  rides: number;
  rate: number;
  image: string;
  location: string;
}

export interface RiderProfileStructure {
  name: string;
  rate: number;
  rides: number;
  image: string;
}
