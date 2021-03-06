import {Component} from "@angular/core";
import {Auth} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [Auth],
  templateUrl: 'app.component.html',
})

export class AppComponent {
  title = 'Tour of Heroes';

  private profile: any;

  constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
