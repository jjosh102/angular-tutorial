import { Injectable } from "@angular/core";
import { InvestmentData, InvestmentResultData } from "./investment.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  calculateInvestmentResults(investment: InvestmentData): InvestmentResultData[] {
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

    return annualData;
  }
}
