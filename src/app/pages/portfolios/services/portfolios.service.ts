import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/environments/environment';
import { CommonService } from '../../../services/common.service';
import { Portfolio } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor(
    private _commonService: CommonService,
    private _http: HttpClient
  ) { }

  private getUrlEndPoint(resource: string = ''): string {
    return `${API_URL}portfolios${resource}`;
  }

  getAll(): Observable<Portfolio[]> {
      const url = this.getUrlEndPoint();
      return this._http.get<Portfolio[]>(url).pipe(
        catchError(this._commonService.errorHandler)
      );
  }

  getById(id: number): Observable<Portfolio> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.get<Portfolio>(url).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  create(portfolio: Portfolio): Observable<Portfolio | Object> {
    const url = this.getUrlEndPoint();
    return this._http.post(url, JSON.stringify(portfolio), this._commonService.httpOptions).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  update(id: number, portfolio: Portfolio): Observable<Portfolio> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.put<Portfolio>(url, JSON.stringify(portfolio), this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }

  delete(id: number): Observable<Portfolio> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.delete<Portfolio>(url, this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }
}
