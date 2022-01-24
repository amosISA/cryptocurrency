import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../../services/portfolios.service';
import { PortfoliosLinesService } from '../../services/portfolios.lines.service';
import { Observable } from 'rxjs';
import { Portfolio } from '../../interfaces/portfolio.interface';
import { LinePortfolioCoin } from '../../interfaces/line.portfolio.coin.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  $portfoliosData: Observable<Portfolio[]>;
  linePortfolioCoinData: Array<{
    show: boolean,
    data: LinePortfolioCoin[]
  }> = [];

  constructor(
    private _portfoliosService: PortfoliosService,
    private _protfoliosLinesService: PortfoliosLinesService
  ) { }

  ngOnInit(): void {
    this.loadPortfoliosData();
  }

  loadPortfoliosData(): void {
    this.$portfoliosData = this._portfoliosService.getAll();
  }

  addPortfolio(): void {

  }

  updatePortfolio(): void {

  }

  deletePortfolio(): void {
    
  }

  showLines(id: number): void {
    if (!this.linePortfolioCoinData[id]) {
      this._protfoliosLinesService.showLines(id).subscribe((data: LinePortfolioCoin[]) => {
        this.linePortfolioCoinData[id] = {
          show: true,
          data
        };
      });
    } else {
      this.linePortfolioCoinData[id].show = !this.linePortfolioCoinData[id].show;
    }
  }
}
