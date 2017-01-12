export interface User {
  name: string; // required min 5 length
  address?: {
    street?: string; //required
    postcode?: string;
  }
}
