import {Component, OnInit} from "@angular/core";
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

  constructor(private ticketService: TicketService, private router: Router, private auth: Auth) {
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }

  getTickets(): void {
    this.ticketService.getTickets().then(tickets => this.tickets = tickets);
  }

  ngOnInit(): void {
    this.getTickets();
  }
}
