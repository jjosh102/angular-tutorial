import { Component, computed, inject } from '@angular/core';
import type { InvestmentResultData } from '../investment/investment.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment/investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
