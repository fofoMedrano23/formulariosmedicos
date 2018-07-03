import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSolicitudAnalisisComponent } from './reporte-solicitud-analisis.component';

describe('ReporteSolicitudAnalisisComponent', () => {
  let component: ReporteSolicitudAnalisisComponent;
  let fixture: ComponentFixture<ReporteSolicitudAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSolicitudAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSolicitudAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
