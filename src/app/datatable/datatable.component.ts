import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserdataserviceService} from "../userdataservice.service";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  users : User[];
  selectedUser : User;

  constructor(private userdataService : UserdataserviceService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() : void {
    this.userdataService.getUsers()
      .subscribe(json => this.users = json.slice(1,12));
  }

  onSelect(u: User) : void {
    this.selectedUser = u;
  }
}
