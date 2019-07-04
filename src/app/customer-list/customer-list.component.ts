import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users : any[]) => {
      this.customers = users;
    })
  }

}
