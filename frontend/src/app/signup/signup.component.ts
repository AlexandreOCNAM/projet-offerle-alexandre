import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {}

  constructor(private fb: FormBuilder) { }
  isSubmitted = false;

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password_confirm: ['', Validators.required],
    username: ['', Validators.required],
  });

  onSignup(){
    if (this.signupForm.value.password != this.signupForm.value.password_confirm){
      alert("Passwords do not match");
      return;
    }
    console.log("signed up");
  }
}
