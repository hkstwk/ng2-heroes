import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators, FormGroup, FormArray} from "@angular/forms";
import {Ticket} from "./ticket.interface";

@Component({
  moduleId: module.id,
  selector: 'ticket',
  providers: [],
  templateUrl: 'ticket.component.html',
})

export class TicketComponent implements OnInit {

  public ticketForm: FormGroup; // form model
  public model: any

  constructor(private _fb: FormBuilder){

  }

  ngOnInit(){
    //TODO initialize
    this.ticketForm = this._fb.group({
      date: ['13 januari 2017', [Validators.required]],
      entries: this._fb.array([this.initEntry()])
    });
  }

  initEntry() {
    // initialize our address
    return this._fb.group({
      category: ['Work', Validators.required],
      hours: ['', Validators.required]
    });
  }

  addEntry() {
    // add address to the list
    const control = <FormArray>this.ticketForm.controls['entries'];
    control.push(this.initEntry());
  }

  removeEntry(i: number) {
    // remove address from the list
    const control = <FormArray>this.ticketForm.controls['entries'];
    control.removeAt(i);
  }

  save(model: Ticket){
    this.model = (this.ticketForm.getRawValue());
    console.log(model);
  }
}
