import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgFormAComponent } from './bg-form-a.component';

describe('BgFormAComponent', () => {
  let component: BgFormAComponent;
  let fixture: ComponentFixture<BgFormAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgFormAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
