import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Investment } from "./investment/investment";
import { InvestmentResultData } from './investment/investment.model';
import { InvestmentResult } from './investment-result/investment-result';

@Component({
  selector: 'app-root',
  imports: [Header, Investment, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  investmentResults = signal<InvestmentResultData[]>([]) ;

  onResultReceive(results: InvestmentResultData[]) : void{
    this.investmentResults.set(results);
  }

}
