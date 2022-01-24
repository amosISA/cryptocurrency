import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Coin } from '../interfaces/coin.interface';
import { CurrenciesService } from '../services/currencies.service';

@Component({
  selector: 'app-currencies-dialog',
  templateUrl: './currencies.dialog.component.html',
  styleUrls: ['./currencies.dialog.component.scss']
})

export class CurrenciesDialogComponent {

  coinForm: FormGroup;
  invalidCoinAcronym: boolean = false;

  constructor(
      private _fb: FormBuilder,
      private _currenciesService: CurrenciesService,
      public dialogRef: MatDialogRef<CurrenciesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Coin
    ) {
      this.buildForm();
    }

    buildForm(): void {
      if (!this.data) {
        this.coinForm = this._fb.group({
          acronym: [null, Validators.required],
          name: [null, Validators.required]
        });
      }
    }

    save(): void {
      if (this.coinForm.valid) {
        const {acronym, name} = this.coinForm.value;
        this._currenciesService.validateCoin(acronym).subscribe((result: boolean) => {
          if (result) {
            const coin: Coin = {
              id: 15,
              acronym,
              name
            };
            this._currenciesService.create(coin).subscribe(() => this.dialogRef.close(true));
          } else {
            this.invalidCoinAcronym = true;
          }
        });
      }
    }
}