import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }

  createTicketDB() {
    let tickets = [
      {
        "date": "9-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "8"
          }
        ]
      },
      {
        "date": "10-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "12"
          }
        ]
      },
      {
        "date": "11-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "9"
          }
        ]
      },
      {
        "date": "12-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "8"
          }
        ]
      },
      {
        "date": "13-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "8"
          }
        ]
      },
      {
        "date": "16-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "9"
          }
        ]
      },
      {
        "date": "17-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "8"
          },
          {
            "category": "Compensation",
            "hours": "2"
          }
        ]
      },
      {
        "date": "18-1-2017",
        "entries": [
          {
            "category": "Work",
            "hours": "4"
          },
          {
            "category": "Leave",
            "hours": "4"
          }
        ]
      }
    ];
    return {tickets};
  }
}
