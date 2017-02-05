import {Auth} from "./auth.service";
import {Component} from "@angular/core";
import {JwtHelper} from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'jwt',
  templateUrl: 'jwt.component.html',
  styleUrls: [ 'jwt.component.css' ],
})



export class JwtComponent {
  private token : any;
  private header: any;
  private headerJSON: any;
  private payload: any;
  private payloadJSON: any;
  private signature: any;
  private tokenExpirationDate: any;
  private isTokenExpired: boolean;
  private isValid: boolean;
  private receivedSignature: any;

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private auth: Auth){
    if (this.token = localStorage.getItem('id_token')){
      this.header = this.token.split('.')[0];
      this.headerJSON = JSON.parse(this.jwtHelper.urlBase64Decode(this.header));
      this.payload = this.token.split('.')[1];
      this.payloadJSON = JSON.parse(this.jwtHelper.urlBase64Decode(this.payload));
      this.signature = this.token.split('.')[2];
      this.tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
      this.isTokenExpired = this.jwtHelper.isTokenExpired(this.token);

      this.isValid = this.verifyToken(this.token);
    };
  }

  verifyToken(token: any) : boolean {
    var cryptoJS = require("../node_modules/crypto-js/crypto-js.js");

    var header = token.split('.')[0];
    var payload = token.split('.')[1];

    this.receivedSignature =
      cryptoJS.HmacSHA256(
          header + '.' + payload,
          "rBbZZbFKPpk-Hu4hnv1lBwQxkropr_U4aLyZUEdyUyFtjl02lR9o1Og4cAaQsRNJ"
        )
        .toString(cryptoJS.enc.Base64)
        .replace(/\//g,"_").replace(/\+/g,"-").replace(/=+$/g,"")
      ;

    return (this.signature == this.receivedSignature);
  }

}
