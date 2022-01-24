import { NgModule } from '@angular/core';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrenciesDialogComponent } from './dialogs/currencies.dialog.component';

@NgModule({
  declarations: [
    CurrenciesComponent,
    CurrenciesDialogComponent
  ],
  imports: [
    SharedModule,
    CurrenciesRoutingModule
  ]
})
export class CurrenciesModule { }
