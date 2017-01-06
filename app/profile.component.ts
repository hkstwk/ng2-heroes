import {Component} from "@angular/core";
import {Auth} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'profile',
  providers: [Auth],
  templateUrl: 'profile.component.html',
})

export class ProfileComponent {
  private profile: any;

  constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
