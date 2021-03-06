import {Component, OnInit, Output, EventEmitter} from "@angular/core";
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
  @Output() onSaved = new EventEmitter<any>();

  constructor(private _fb: FormBuilder){ }


  ngOnInit(){
    this.ticketForm = this._fb.group({
      date: [new Date().toLocaleDateString(), [Validators.required]],
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
    this.onSaved.emit(model);
    console.log(model);
  }
}
