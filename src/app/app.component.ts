import {Component} from '@angular/core';
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
}
