import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CommaExpr } from '@angular/compiler';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 11, name: 'Matt Smith', email: 'smith@smithco.com'},
      {id: 12, name: 'Jane Williams', email: 'jane@smithco.com'},
      {id: 13, name: 'Lisa Au', email: 'lisa@auco.com'},
      {id: 14, name: 'Steve Steverson', email: 'steve@bread.com'},
    ];
    return {users};
  }
}