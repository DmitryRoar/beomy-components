import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'gen-bg-form-a',
  templateUrl: './bg-form-a.component.html',
  styleUrls: ['./bg-form-a.component.scss'],
})
export class BgFormAComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#2b83da';
  }

  ngOnInit(): void {}
}
