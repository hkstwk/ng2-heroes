export interface Ticket {
  date: string;       // required
  entries: Entry[];   // required at least once
}

export interface Entry {
  category: string;   // required
  hours: number;      // required, numeric
}
