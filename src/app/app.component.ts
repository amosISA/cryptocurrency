import { Component } from '@angular/core';

interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tabs: TabItem[] = [
    {
      label: 'Currencies',
      route: '/currencies'
    },
    {
      label: 'Portfolios',
      route: '/portfolios'
    }
  ];
  
}
