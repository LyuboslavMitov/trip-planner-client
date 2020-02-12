import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private currentUser: User = {firstName:'pesho'};
  public userForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService, private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      id:'',
      username:'',
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit() {
    this.currentUser.id = this.authService.getUserId();
    this.userForm.disable();
    this.userService.getUserInfo(this.currentUser.id).subscribe(user => {
      this.currentUser = user;
    });
  }

}
