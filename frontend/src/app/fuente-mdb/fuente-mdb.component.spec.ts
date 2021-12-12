import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteMdbComponent } from './fuente-mdb.component';

describe('FuenteMdbComponent', () => {
  let component: FuenteMdbComponent;
  let fixture: ComponentFixture<FuenteMdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenteMdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteMdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
