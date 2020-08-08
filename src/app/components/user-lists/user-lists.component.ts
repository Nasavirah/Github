import { Component, OnInit } from '@angular/core';
// Importing Service 
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {

  public users: any;
  search: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

}
