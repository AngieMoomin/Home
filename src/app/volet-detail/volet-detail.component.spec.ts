import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoletDetailComponent } from './volet-detail.component';

describe('VoletDetailComponent', () => {
  let component: VoletDetailComponent;
  let fixture: ComponentFixture<VoletDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoletDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoletDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
