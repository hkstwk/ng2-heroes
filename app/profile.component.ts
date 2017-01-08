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

  number1: any;
  number2: any;
  result: any;
  error: any;
  time: any;
  delay = 200;

  constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.doStuff(this.number1 = 5, this.number2 = 2);
  }

  public add(x: number,y: number): Promise<number>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = x + y;
        if (result >= 0){
          resolve(result);
        } else {
          reject('invalid value :' + result);
        }
      }, Number(this.delay));
    });
  }

  public initialise(){
    this.result = null;
    this.error = null;
    this.time = null;
  }

  public doStuff(x: number, y: number) {
    this.initialise();
    const startTime = Date.now();
    this.add(Number(x),Number(y))
      .then(result => this.add(result, 3))
      .then(result => this.add(result, 1))
      .then(result => {
        this.result = result;
        this.time = Date.now() - startTime;
      })
      .catch(error => this.error = error)
      .then(() => this.time = Date.now() - startTime);
  }

}
