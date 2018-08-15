import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsDetailsComponent } from './datasets-details.component';

describe('DatasetsDetailsComponent', () => {
  let component: DatasetsDetailsComponent;
  let fixture: ComponentFixture<DatasetsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
