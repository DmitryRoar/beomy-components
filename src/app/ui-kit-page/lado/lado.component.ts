import { Component } from '@angular/core';
@Component({
  selector: 'gen-ui-kit-lado',
  templateUrl: './lado.component.html',
  styleUrls: ['./lado.component.scss'],
})
export class LadoComponent {
  constructor() {}

  //#region rediolist

  rbGroupTitle = 'Gender';
  choices: string[] = ['Male', 'Female', 'Dog', 'Cat', 'Fish', 'Lama', 'Tiger'];

  //#endregion

  //#region reusable modal image

  imgPath1 = 'assets/img/book.svg';
  textMess1 = "You didn't added your working hours";
  imgPath2 = 'assets/img/girl.svg';
  textMess2 = "You don't work on this day";

  //#endregion

  //#region  scroll up (required on external out)

  onPageLoad(event: any) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  //#endregion
}
