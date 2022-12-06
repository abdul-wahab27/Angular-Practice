import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user';

import { Form } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any

  constructor(public _userService:UserService) { }

  ngOnInit(): void {

    this._userService.getUsers()
      .subscribe((user) => {
        console.log("component Users::::::",user)
          this.users= user
        })
      }

      getUsers(){
        this._userService.getUsers()
        .subscribe(res => {
          this.users = res
        })
      }


  }
