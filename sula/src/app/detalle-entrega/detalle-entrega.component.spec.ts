import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntregaComponent } from './detalle-entrega.component';

describe('DetalleEntregaComponent', () => {
  let component: DetalleEntregaComponent;
  let fixture: ComponentFixture<DetalleEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
