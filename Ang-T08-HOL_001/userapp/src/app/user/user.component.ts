import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] = [];
  isLoading: boolean = true;
  message: string = '';
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data['data'];
        console.log(this.users);
      },
      (error) => {
        console.log('Something went wrong');
        console.log('Error : ' + error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  createUser(userForm: NgForm) {
console.log(userForm.value.userName);
    this.userService
      .createUser({
        name: userForm.value.userName,
        job: userForm.value.userJob,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.message = JSON.stringify(data);
        },
        (error) => {
          console.log('Something went wrong');
          console.log('Error : ' + error);
          this.message = 'Something went wrong';
        },
        () => {
          console.log('Done');
        }
      );
  }

  updateUser(userForm: NgForm) {
    this.userService
      .updateUser(userForm.value.userID, {
        name: userForm.value.userName,
        job: userForm.value.userJob,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.message = JSON.stringify(data);
        },
        (error) => {
          console.log('Something went wrong');
          console.log('Error : ' + error);
          this.message = 'Something went wrong';
        },
        () => {
          console.log('Done');
        }
      );
  }

  deleteUser(userForm: NgForm) {
    this.userService.deleteUser(userForm.value.userID).subscribe(
      (data) => {
        console.log(data);
        if (data == null) {
          //as per the API documentation if delete done then it returns null object
          console.log(data);
          this.message = 'Delete done';
        }
      },
      (error) => {
        console.log('Something went wrong');
        console.log('Error : ' + error);
        this.message = 'Something went wrong';
      },
      () => {
        console.log('Done');
      }
    );
  }
}
