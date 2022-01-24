import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/currencies',
        pathMatch: 'full',
    },
    {
        path: 'currencies',
        loadChildren: () => import('./pages/currencies/currencies.module').then(m => m.CurrenciesModule)
    },
    {
        path: 'portfolios',
        loadChildren: () => import('./pages/portfolios/portfolios.module').then(m => m.PortfoliosModule)
    },
    { path: '', redirectTo: '/currencies', pathMatch: 'full' },
    { path: '**', redirectTo: '/currencies' },
];
