import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../../../_core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {}

  constructor(private fb: FormBuilder, private api: AuthService, private router: Router) { }
  isSubmitted = false;

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_confirm: ['', Validators.required],
    username: ['', Validators.required],
  });

  onSignup(){
    if (this.signupForm.value.password! !== this.signupForm.value.password_confirm!){
      alert("Passwords do not match");
      return;
    }
    this.api.register(this.signupForm.value.email!, this.signupForm.value.password!, this.signupForm.value.username!).subscribe(
      (response) => {
        if (response) {
          this.api.login(this.signupForm.value.email!, this.signupForm.value.password!).subscribe(
            () => {
              this.router.navigate(['/']);
              alert("You have successfully registered, and are now logged in!");
            }
          );
        }
      }
    );
  }
}
