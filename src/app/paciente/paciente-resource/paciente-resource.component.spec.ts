import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteResourceComponent } from './paciente-resource.component';

describe('PacienteResourceComponent', () => {
  let component: PacienteResourceComponent;
  let fixture: ComponentFixture<PacienteResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
