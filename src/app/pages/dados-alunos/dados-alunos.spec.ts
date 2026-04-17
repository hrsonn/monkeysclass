import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAlunos } from './dados-alunos';

describe('DadosAlunos', () => {
  let component: DadosAlunos;
  let fixture: ComponentFixture<DadosAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(DadosAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
