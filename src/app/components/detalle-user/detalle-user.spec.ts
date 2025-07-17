import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUser } from './detalle-user';

describe('DetalleUser', () => {
  let component: DetalleUser;
  let fixture: ComponentFixture<DetalleUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
