export class Jwt {
  token : string;
  header: string;
  headerJSON: JSON;
  payload: string;
  payloadJSON: JSON;
  signature: string;
  tokenExpirationDate: Date;
  isTokenExpired: boolean;
  isValid: boolean;
}
