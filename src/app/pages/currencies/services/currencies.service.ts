import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Coin } from '../interfaces/coin.interface';
import { API_URL } from 'src/environments/environment';
import { CommonService } from '../../../services/common.service';
import { CoinList, CoinListData } from '../interfaces/coin.list.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(
    private _commonService: CommonService,
    private _http: HttpClient
  ) { }

  private getUrlEndPoint(resource: string = ''): string {
    return `${API_URL}coins${resource}`;
  }

  validateCoin(acronym: string): Observable<boolean> {
    if (acronym) {
      const url = 'https://min-api.cryptocompare.com/data/all/coinlist';
      return this._http.get<CoinList>(url).pipe(
        map((data: CoinList) => {
          if (data.Data) {
            const findAcronym = Object.keys(data.Data)
                       .find(item => data.Data[item].Name === acronym);
            return findAcronym ? true : false;
          }
          return true;
        }),
        tap((result: boolean) => result),
        catchError(this._commonService.errorHandler)
      );
    }
    return of(false);
  }

  getAll(): Observable<Coin[]> {
      const url = this.getUrlEndPoint();
      return this._http.get<Coin[]>(url).pipe(
        catchError(this._commonService.errorHandler)
      );
  }

  getById(id: number): Observable<Coin> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.get<Coin>(url).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  create(coin: Coin): Observable<Coin | Object> {
    const url = this.getUrlEndPoint();
    return this._http.post(url, JSON.stringify(coin), this._commonService.httpOptions).pipe(
      catchError(this._commonService.errorHandler)
    );
  }

  update(id: number, coin: Coin): Observable<Coin> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.put<Coin>(url, JSON.stringify(coin), this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }

  delete(id: number): Observable<Coin> {
    const url = this.getUrlEndPoint(`/${id}`);
    return this._http.delete<Coin>(url, this._commonService.httpOptions)
    .pipe(
      catchError(this._commonService.errorHandler)
    )
  }
}
