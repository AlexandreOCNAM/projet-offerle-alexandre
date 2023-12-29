import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log('submitted', this.loginForm.value, this.loginForm.invalid);
    this.isSubmitted = true;
  }
}
