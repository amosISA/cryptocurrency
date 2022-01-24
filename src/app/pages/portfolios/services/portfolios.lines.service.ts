import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';
import { CommonService } from '../../../services/common.service';
import { PortfolioLine } from '../interfaces/portfolio.line.interface';
import { LinePortfolioCoin } from '../interfaces/line.portfolio.coin.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosLinesService {

  constructor(
    private _commonService: CommonService,
    private _http: HttpClient
  ) { }

  private getUrlEndPoint(resource: string = ''): string {
    return `${API_URL}portfolios${resource}`;
  }

  getById(id: number): Observable<PortfolioLine> {
    const url = this.getUrlEndPoint(`/${id}/lines`);
    return this._http.get<PortfolioLine>(url).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  create(portfolioLine: PortfolioLine, id: number): Observable<PortfolioLine | Object> {
    const url = this.getUrlEndPoint(`/${id}/lines`);
    return this._http.post(url, JSON.stringify(portfolioLine), this._commonService.httpOptions).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  update(id: number, portfolioLine: PortfolioLine): Observable<PortfolioLine> {
    const url = this.getUrlEndPoint(`/${id}/lines/${id}`);
    return this._http.put<PortfolioLine>(url, JSON.stringify(portfolioLine), this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }

  delete(id: number): Observable<PortfolioLine> {
    const url = this.getUrlEndPoint(`/${id}/lines/${id}`);
    return this._http.delete<PortfolioLine>(url, this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }

  showLines(id: number): Observable<LinePortfolioCoin[]> {
    const url = this.getUrlEndPoint(`/${id}/lines?_expand=coin&_expand=portfolio`);
    return this._http.get<LinePortfolioCoin[]>(url).pipe(
      catchError(this._commonService.errorHandler)
    );
  }
}
