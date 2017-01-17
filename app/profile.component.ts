import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Auth} from "./auth.service";
import {subscribeToResult} from "rxjs/util/subscribeToResult";
import { User } from "./user.interface";

@Component({
  moduleId: module.id,
  selector: 'profile',
  providers: [Auth],
  templateUrl: 'profile.component.html',
})

export class ProfileComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  private profile: any;

  people: User = {
    name: 'Harm',
    address: {
      street: 'De wiende 22',
      postcode: '8332LB'
    }
  };

  number1: any;
  number2: any;
  result: any;
  error: any;
  time: any;
  delay = 200;

  constructor(private auth: Auth, private _fb: FormBuilder) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.doStuff(this.number1 = 5, this.number2 = 2);
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        postcode: ['8000']
      })
    });
    (<FormGroup>this.myForm).setValue(this.people, {onlySelf: true});
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges() {
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormValueChanges$.subscribe(x => this.events.push({ event: 'STATUS CHANGED', object: x}));
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

  save(model: User, isValid: boolean){
    this.submitted = true;
    console.log(model, isValid);
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
