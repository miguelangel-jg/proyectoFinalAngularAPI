import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaDetalleComponent } from './camiseta-detalle.component';

describe('CamisetaDetalleComponent', () => {
  let component: CamisetaDetalleComponent;
  let fixture: ComponentFixture<CamisetaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisetaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
