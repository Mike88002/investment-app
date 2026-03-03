import {Component, EventEmitter, output, Output, signal} from '@angular/core';
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

  enteredInitialInvestment = signal('5000');
  enteredAnnualInvestment = signal('1');
  enteredReturnRate = signal('5');
  enteredDuration = signal('5');

  calculate = output<userInput>();

  submitForm() {
   this.calculate.emit({
     initialInvestment: +this.enteredInitialInvestment(),
     duration: +this.enteredDuration(),
     expectedReturn: +this.enteredReturnRate(),
     annualInvestment: +this.enteredAnnualInvestment()
   });
   this.enteredInitialInvestment.set('0');
   this.enteredDuration.set('0');
   this.enteredReturnRate.set('0');
   this.enteredAnnualInvestment.set('0');
  }
}
