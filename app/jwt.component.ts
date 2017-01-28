import {Auth} from "./auth.service";
import {Component} from "@angular/core";
import {JwtHelper} from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'jwt',
  providers: [Auth],
  templateUrl: 'jwt.component.html',
})

export class JwtComponent {
  private token : any;
  private tokenHeader: any;
  private decodedToken: any;
  private tokenExpirationDate: any;
  private isTokenExpired: boolean;

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private auth: Auth){
    this.token = localStorage.getItem('id_token');
    this.tokenHeader = JSON.parse(this.jwtHelper.urlBase64Decode(this.token.split('.')[0]));
    this.decodedToken = this.jwtHelper.decodeToken(this.token);
    // this.decodedToken = JSON.parse(this.jwtHelper.urlBase64Decode(this.token.split('.')[1]));
    this.tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
    this.isTokenExpired = this.jwtHelper.isTokenExpired(this.token);
  }

  parseJwt (token: any) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
  }
}
