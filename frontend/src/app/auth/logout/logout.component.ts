import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder) { }

  logoutForm = this.fb.group({
    confirmed: false,
  });

  onLogout() {
    console.log("logged out");
    
  }
}
