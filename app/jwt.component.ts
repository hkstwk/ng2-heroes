import {Auth} from "./auth.service";
import {Component} from "@angular/core";
import {JwtHelper} from 'angular2-jwt';
import {Jwt} from './jwt';

@Component({
  moduleId: module.id,
  selector: 'jwt',
  templateUrl: 'jwt.component.html',
  styleUrls: [ 'jwt.component.css' ],
})



export class JwtComponent {
  private jwt : Jwt;

  private receivedSignature: string;

  constructor(private auth: Auth){
    this.jwt = new Jwt(localStorage.getItem('id_token'));
    this.jwt.isValid = this.verifyToken(this.jwt.token);
  }

  base64Encode(str2Encode : string) {
    console.log(str2Encode + " ==> base64 encode is " + btoa(this.jwt.payloadJSONPretty));
    return btoa(str2Encode);
  }

  verifyToken(token: string) : boolean {
    let cryptoJS = require("../node_modules/crypto-js/crypto-js.js");

    let header = token.split('.')[0];
    let payload = token.split('.')[1];

    this.receivedSignature =
      cryptoJS.HmacSHA256(
          header + '.' + payload,
          "rBbZZbFKPpk-Hu4hnv1lBwQxkropr_U4aLyZUEdyUyFtjl02lR9o1Og4cAaQsRNJ"
        )
        .toString(cryptoJS.enc.Base64)
        .replace(/\//g,"_").replace(/\+/g,"-").replace(/=+$/g,"")
      ;

    return (this.jwt.signature == this.receivedSignature);
  }

  toggle(){
    this.jwt.isValid = !this.jwt.isValid;
  }

}
