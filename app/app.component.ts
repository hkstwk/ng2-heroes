import { Component } from '@angular/core';
import {Auth} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private auth: Auth) {}
}
