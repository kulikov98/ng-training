import { Component, OnInit } from '@angular/core';


enum Category {
  'one',
  'two',
  'tree',
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name = 'some name';
  description = 'some description';
  price = 99.9;
  category = Category;
  isAvailable = false;

  advantages: Array<{ value: string }> = [
    { value: 'low price' },
    { value: 'pefect condition' },
    { value: 'nice color' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
