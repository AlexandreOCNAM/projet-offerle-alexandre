import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder, private api: AuthService) { }

  logoutForm = this.fb.group({
    confirmed: false,
  });

  onLogout() {
    this.api.logOut();
    console.log("logged out");
    
  }
}
