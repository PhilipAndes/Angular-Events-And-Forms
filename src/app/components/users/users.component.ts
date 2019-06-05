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
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
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
        age: 70,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('10/12/2017 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser() {
    // We always want a user to be active
    this.user.isActive = true;
    
    // Set to current date
    this.user.registered = new Date();

    // unshift will add to the beginning
    this.users.unshift(this.user);

    // To clear out the forum:
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }

}
