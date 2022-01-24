import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PortfolioComponent} from './components/portfolio/portfolio.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfoliosRoutingModule {}
