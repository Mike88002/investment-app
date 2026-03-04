import {Component, computed, inject} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-output',
  templateUrl: './investment-output.component.html',
  styleUrl: './investment-output.component.css'
})
export class InvestmentOutputComponent {
  // result = input<>();
  private investmentService = inject(InvestmentService);

  results= computed(() => this.investmentService.resultsData());

}
