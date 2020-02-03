import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  // onSubmit(formValue: any) {
  //   const { username, password } = formValue;

  //   this.authService.login({
  //     username,
  //     password,
  //   }).subscribe(
  //     (res) => {
  //       localStorage.setItem('token', res.token);
  //       this.authService.updateUserRole();
  //       this.router.navigate(['/']);

  //       return true;
  //     },
  //     (err: HttpErrorResponse) => {
  //     });
  // }
}
