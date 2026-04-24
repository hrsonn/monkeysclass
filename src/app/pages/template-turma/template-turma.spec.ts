import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTurma } from './template-turma';

describe('TemplateTurma', () => {
  let component: TemplateTurma;
  let fixture: ComponentFixture<TemplateTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
