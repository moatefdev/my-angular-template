import { Component } from '@angular/core';
// import { ItemBoxComponent } from './item-box/item-box.component';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MarketPlace';
  items = [123, 'Angular', '321', 456, true];
  popularItems: Array<IItems> = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
    { id: 4, name: 'Item 4', price: 400 },
    { id: 5, name: 'Item 5', price: 500 },
  ];

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    $(document).ready(function () {
      const body = <HTMLDivElement>document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }
}

interface IItems {
  id: number;
  name: string;
  price: number;
}
