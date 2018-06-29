import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFormulariosComponent } from './seccion-formularios.component';

describe('SeccionFormulariosComponent', () => {
  let component: SeccionFormulariosComponent;
  let fixture: ComponentFixture<SeccionFormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionFormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
