import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {userInput} from "../app.component";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '1';
  enteredReturnRate = '5';
  enteredDuration = '10';

  @Output() calculateEmitter = new EventEmitter<userInput>();

  submitForm() {
   this.calculateEmitter.emit({
     initialInvestment: +this.enteredInitialInvestment,
     duration: +this.enteredDuration,
     expectedReturn: +this.enteredReturnRate,
     annualInvestment: +this.enteredAnnualInvestment
   });
  }
}
