import {Component, inject, input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";

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
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }

}
