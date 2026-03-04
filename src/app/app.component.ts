import {Component, signal} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentOutputComponent} from "./investment-output/investment-output.component";

export interface userInput {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentOutputComponent
  ]
})
export class AppComponent {

  // questo signal puo avere o quel mega oggetto o un valore undefined
 resultsData = signal<{
   year: number,
   interest: number,
   valueEndOfYear: number,
   annualInvestment: number,
   totalInterest: number,
   totalAmountInvested: number
 }[] | undefined>(undefined)

  calculateInvestmentResults(
    data: userInput
  ) {
    // pull out this property and store them in a property

    const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

   this.resultsData.set(annualData);
  }
}
