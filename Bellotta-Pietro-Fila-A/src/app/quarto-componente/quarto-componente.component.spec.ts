import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponenteComponent } from './quarto-componente.component';

describe('QuartoComponenteComponent', () => {
  let component: QuartoComponenteComponent;
  let fixture: ComponentFixture<QuartoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
