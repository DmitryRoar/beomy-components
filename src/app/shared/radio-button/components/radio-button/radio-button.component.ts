/* code 4/10/2021 by github.com/ladooniani */

//#region  How use Gen-radio-button component

/// Use module:

// import { MatButtonModule } from '@angular/material/button';

/// Test external usage:

/*
     <gen-radio-button
    [title]="rbGroupTitle"
    [radioLst]="choices"
  ></gen-radio-button>

  rbGroupTitle = 'Gender';
  choices: string[] = ['Male', 'Female', 'Dog', 'Cat', 'Fish', 'Lama', 'Tiger'];

 */

//#endregion

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gen-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() radioLst!: string[];

  val = '';

  constructor() {}

  ngOnInit(): void {}

  rbChange(choice: any) {
    this.display(choice);
  }

  display(value: any) {
    console.log('Radio-button\ncomponent console value:\n', value);
  }
}
