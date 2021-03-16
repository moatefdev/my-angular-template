import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title = 'MarketPlace';
  items = [123, 'Angular', '321', 456, true];
  popularItems: Array<IItems> = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
    { id: 4, name: 'Item 4', price: 400 },
    { id: 5, name: 'Item 5', price: 500 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface IItems {
  id: number;
  name: string;
  price: number;
}
