export class Ticket {
  date: string;       // required
  entries: Entry[];   // required at least once
}

export class Entry {
  category: string;   // required
  hours: number;      // required, numeric
}
