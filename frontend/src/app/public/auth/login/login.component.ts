import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/_core/services/auth.service';
import { HttpLoginResponse } from 'src/app/_shared/interfaces/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder, private api: AuthService, private router: Router) { }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      this.api.login(email!, password!).subscribe(
        () => {
          console.log("logged in");
          this.router.navigate(['/']);
        }
      );
    }
  }
}
