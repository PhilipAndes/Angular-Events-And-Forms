import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Tim',
        lastName: 'Smith',
        email: 'tim@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JDoe@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'KarenW@gmail.com',
        isActive: true,
        registered: new Date('10/12/2017 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   // We always want a user to be active
  //   this.user.isActive = true;

  //   // Set to current date
  //   this.user.registered = new Date();

  //   // unshift will add to the beginning
  //   this.users.unshift(this.user);

  //   // To clear out the forum:
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

}
