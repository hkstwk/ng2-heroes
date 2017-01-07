import {Component} from "@angular/core";
import {Auth} from "./auth.service";
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Component({
  moduleId: module.id,
  selector: 'profile',
  providers: [Auth],
  templateUrl: 'profile.component.html',
})

export class ProfileComponent {
  private profile: any;

  result: any;
  error: any;
  time: any;

  constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));

    const startTime = Date.now();
    this.add(5,2)
      .then(result => this.add(result, 3))
      .then(result => this.add(result, 1))
      .then(result => {
        this.result = result;
        this.time = Date.now() - startTime;
      })
      .catch(error => this.error = error)
      .then(() => this.time = Date.now() - startTime);
  }

  add(x: number,y: number): Promise<number>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = x + y;
        if (result >= 0){
          resolve(result);
        } else {
          reject('invalid value :' + result);
        }
      }, 100);
    });
  }
}
