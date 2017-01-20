import {Component, OnInit, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Auth} from "./auth.service";
import {Ticket} from "./ticket.interface";
import {TicketService} from "./ticket.service";

@Component({
  moduleId: module.id,
  selector: 'tickets',
  providers: [],
  templateUrl: './tickets.component.html',
})

export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(private ticketService: TicketService, private router: Router, private auth: Auth) {}

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }

  getTickets(): void {
    this.ticketService.getTickets().then(tickets => this.tickets = tickets);
  }

  ngOnInit(): void {
    this.getTickets();
  }

  onSaved(model: any){
    this.tickets.push(model.value);
  }

  deleteTicket(ticket: Ticket): void {
    this.ticketService
      .deleteTicket(ticket.date)
      .then(() => {
        this.tickets = this.tickets.filter(t => t !== ticket);
        if (this.selectedTicket === ticket) { this.selectedTicket = null; }
      });
  }

}
