import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData, InvestmentResultData } from './investment.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment',
  imports: [FormsModule],
  templateUrl: './investment.html',
  styleUrl: './investment.css'
})
export class Investment {
  input = signal<InvestmentData>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });
  result = output<InvestmentResultData[]>();
  investmentService = inject(InvestmentService);

  onSubmit() {
    const resultData = this.investmentService.calculateInvestmentResults(this.input());
    this.result.emit(resultData);
    console.log('Emitted results:', resultData);
  }

}
