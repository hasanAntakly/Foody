import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
	animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({opacity: 0 }),
            animate('0.3s ease-out', 
                    style({opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({opacity: 1 }),
            animate('0.3s ease-in', 
                    style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MainComponent implements OnInit {
  constructor() { }
	Indicator = 0;		
	foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {
  }
}
