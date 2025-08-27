import { Component, input } from '@angular/core';
import { InvestmentResultData } from '../investment/investment.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  results = input<InvestmentResultData[] | null>(null);
}
