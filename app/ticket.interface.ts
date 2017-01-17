export interface Ticket {
  date: string;       // required
  entries: Entry[];
}

export interface Entry {
  category: string;   // required
  hours: number;      // required, numeric
}
