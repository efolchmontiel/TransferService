import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteMaterializeComponent } from './fuente-materialize.component';

describe('FuenteMaterializeComponent', () => {
  let component: FuenteMaterializeComponent;
  let fixture: ComponentFixture<FuenteMaterializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenteMaterializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteMaterializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
