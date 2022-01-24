import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Coin } from '../../interfaces/coin.interface';
import { CurrenciesService } from '../../services/currencies.service';
import { CurrenciesDialogComponent } from '../../dialogs/currencies.dialog.component';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  $coinData: Observable<Coin[]>;

  constructor(
    private _currenciesService: CurrenciesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadCoinData();
  }

  loadCoinData(): void {
    this.$coinData = this._currenciesService.getAll();
  }

  addCoin(): void {
    const dialogRef = this.dialog.open(CurrenciesDialogComponent, {
      data: null
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.loadCoinData()
      }
    });
  }

  updateCoin(): void {

  }

  deleteCoin(): void {
    
  }
}
