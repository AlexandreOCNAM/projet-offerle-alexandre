import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {

  checkout: string = window.location.pathname.includes('checkout') ? 'step-primary' : 'step-secondary';
}
