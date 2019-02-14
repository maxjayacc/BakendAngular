import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenMatrizComponent } from './almacen-matriz.component';

describe('AlmacenMatrizComponent', () => {
  let component: AlmacenMatrizComponent;
  let fixture: ComponentFixture<AlmacenMatrizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenMatrizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
