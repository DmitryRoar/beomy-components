import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

import {ColorNames} from '../interfaces/names.interface';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[genColor]'
})
export class ColorDirective implements OnInit {
  // @ts-ignore
  @Input() genColor: ColorNames | undefined;

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {
  }

  ngOnInit(): void {
    if (this.el.nativeElement.children[0]) {
      this.r.addClass(this.el.nativeElement.children[0], `gen-color-${this.genColor}`);
    } else {
      this.r.addClass(this.el.nativeElement, `gen-color-${this.genColor}`);
    }
  }
}
