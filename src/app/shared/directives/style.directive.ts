import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {StyleNames} from '../interfaces/names.interface';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[genStyle]'
})
export class StyleDirective {
  // @ts-ignore
  @Input() set genStyle(state: StyleNames): void {
    // @ts-ignore
    const match = state.match(/[A-Z][a-z]+/).join('').toLowerCase();
    this.r.addClass(this.el.nativeElement, match);
  }

  constructor(
    private r: Renderer2,
    private el: ElementRef
  ) {
  }
}
