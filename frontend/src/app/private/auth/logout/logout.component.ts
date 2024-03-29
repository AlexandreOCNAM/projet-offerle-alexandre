import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder, private api: AuthService, private router: Router) { }

  logoutForm = this.fb.group({
    confirmed: false,
  });

  onLogout() {
    this.api.logOut();
    console.log("logged out");
    this.router.navigate(['/']);
  }
}
