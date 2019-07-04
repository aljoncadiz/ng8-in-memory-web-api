import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let users = [
      { id: 1, name: 'Aljon Cadiz', email: 'aljonc@magenic.com' },
      { id: 2, name: 'Joey Banania', email: 'joeyb@magenic.com' },
      { id: 3, name: 'Julius De Castro', email: 'juliusd@magenic.com' }
    ];
    return {users};
  }
}
