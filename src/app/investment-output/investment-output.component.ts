import {Component, input, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-output',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-output.component.html',
  styleUrl: './investment-output.component.css'
})
export class InvestmentOutputComponent {
  // result = input<>();
  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];

}
