import {Auth} from "./auth.service";
import {Component} from "@angular/core";
import {JwtHelper} from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'jwt',
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
    this.tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
    this.isTokenExpired = this.jwtHelper.isTokenExpired(this.token);

    this.verifyToken(this.token);
  }

  verifyToken(token: any){
    var header = token.split('.')[0];
    var payload = token.split('.')[1];
    var signature = token.split('.')[2];
    var cryptoJS = require("../node_modules/crypto-js/crypto-js.js");

    console.log('token = ' + token);
    console.log('header = ' + header);
    console.log('payload = ' + payload);
    console.log('original signature = ' + signature);
    console.log('new signature = ' + cryptoJS.HmacSHA256(header + '.' + payload , "rBbZZbFKPpk-Hu4hnv1lBwQxkropr_U4aLyZUEdyUyFtjl02lR9o1Og4cAaQsRNJ").toString(cryptoJS.enc.Base64));
  }

}
