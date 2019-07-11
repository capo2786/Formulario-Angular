import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatacComponent } from './conatac.component';

describe('ConatacComponent', () => {
  let component: ConatacComponent;
  let fixture: ComponentFixture<ConatacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
