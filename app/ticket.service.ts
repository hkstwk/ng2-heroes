import {Http, Headers} from "@angular/http";
import {Ticket} from "./ticket.interface";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TicketService {
  private ticketsUrl = 'api/tickets';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getHeroes(): Promise<Ticket[]> {
    return this.http.get(this.ticketsUrl)
      .toPromise()
      .then(response => response.json().data as Ticket[])
      .catch(TicketService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
