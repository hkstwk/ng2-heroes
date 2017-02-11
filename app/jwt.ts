import {JwtHelper} from 'angular2-jwt';

export class Jwt {
  token: string;

  header: string;
  headerJSON: JSON;
  payload: string;
  payloadJSON: JSON;
  payloadJSONPretty: string;
  signature: string;
  tokenExpirationDate: Date;
  isTokenExpired: boolean;
  isValid: boolean;

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(token : string){
    this.token = token;

    // fields derived from original token
    this.header = token.split('.')[0];
    this.headerJSON = JSON.parse(this.jwtHelper.urlBase64Decode(this.header));
    this.payload = token.split('.')[1];
    this.payloadJSON = JSON.parse(this.jwtHelper.urlBase64Decode(this.payload));
    this.payloadJSONPretty = JSON.stringify(this.payloadJSON,null,2);
    this.signature = token.split('.')[2];
    this.tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(token);
    this.isTokenExpired = this.jwtHelper.isTokenExpired(token);
    this.isValid = null;
  }
}
