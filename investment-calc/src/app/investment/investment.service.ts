import { Injectable, signal } from "@angular/core";
import type { InvestmentData, InvestmentResultData } from "./investment.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {

  resultData = signal<InvestmentResultData[] | undefined>(undefined);
  calculateInvestmentResults(investment: InvestmentData): void {
    const annualData: InvestmentResultData[] = [];
    let investmentValue = investment.initialInvestment;

    const { initialInvestment, annualInvestment, expectedReturn, duration } = investment;

    for (let year = 1; year <= duration; year++) {
      const interest = investmentValue * (expectedReturn / 100);
      investmentValue += interest + annualInvestment;

      annualData.push({
        year,
        interest,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest: investmentValue - annualInvestment * year - initialInvestment,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set(annualData);
  }

}
