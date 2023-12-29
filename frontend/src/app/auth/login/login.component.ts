import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder, private api: AuthService, private router: Router) { }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    else {
      let email = this.loginForm.value.email || '';
      let password = this.loginForm.value.password || '';
      this.api.login(email, password).subscribe(
        (data) => {
          console.log("logged in");
          localStorage.setItem('token', data.backendTokens.accessToken);
          console.log(data.backendTokens.accessToken);
          
          this.router.navigateByUrl('/');
        }
      );
    }
    this.isSubmitted = true;
  }
}
