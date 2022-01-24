import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    SharedModule,
    PortfoliosRoutingModule
  ]
})
export class PortfoliosModule { }
