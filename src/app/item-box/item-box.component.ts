import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css'],
})
export class ItemBoxComponent implements OnInit {
  @Input() popularItem: any;
  constructor() {}

  ngOnInit(): void {}
}
