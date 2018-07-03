import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionReportesComponent } from './seccion-reportes.component';

describe('SeccionReportesComponent', () => {
  let component: SeccionReportesComponent;
  let fixture: ComponentFixture<SeccionReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
