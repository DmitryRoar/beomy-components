/* code 4/10/2021 by github.com/ladooniani */

//#region  How use Gen-card component

/// Use module:

// import { MatCardModule } from '@angular/material/card';

/// Test external usage:

/*
   <gen-card
    [path]="imgPath1"
    [text]="textMess1"
  ></gen-card>

  imgPath1 = 'assets/img/book.svg';
  textMess1 = "You didn't added your working hours";
  imgPath2 = 'assets/img/girl.svg';
  textMess2 = "You don't work on this day";

 */

//#endregion

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gen-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() path!: string;
  @Input() text!: string;
  constructor() {}
  ngOnInit(): void {}
}
