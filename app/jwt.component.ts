import {Auth} from "./auth.service";
import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'jwt',
  providers: [Auth],
  templateUrl: 'jwt.component.html',
})

export class JwtComponent {
  private token : any;
  private decodedToken: any;

  constructor(private auth: Auth){
    this.token = localStorage.getItem('id_token');
    this.decodedToken = this.parseJwt(this.token);
  }

  parseJwt (token: any) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
  };
}
