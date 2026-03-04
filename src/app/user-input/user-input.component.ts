import {Component, EventEmitter, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {userInput} from "../app.component";
import {InvestmentService} from "../investment.service";

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

  constructor(private investmentService: InvestmentService) {

  }

  submitForm() {
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredReturnRate(),
        annualInvestment: +this.enteredAnnualInvestment()
      }
    )
   this.enteredInitialInvestment.set('0');
   this.enteredDuration.set('0');
   this.enteredReturnRate.set('0');
   this.enteredAnnualInvestment.set('0');
  }
}
