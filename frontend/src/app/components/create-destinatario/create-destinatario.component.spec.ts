import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestinatarioComponent } from './create-destinatario.component';

describe('CreateDestinatarioComponent', () => {
  let component: CreateDestinatarioComponent;
  let fixture: ComponentFixture<CreateDestinatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDestinatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
