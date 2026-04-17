import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAluno } from './novo-aluno';

describe('NovoAluno', () => {
  let component: NovoAluno;
  let fixture: ComponentFixture<NovoAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(NovoAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
