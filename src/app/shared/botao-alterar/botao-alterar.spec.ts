import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAlterar } from './botao-alterar';

describe('BotaoAlterar', () => {
  let component: BotaoAlterar;
  let fixture: ComponentFixture<BotaoAlterar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoAlterar],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoAlterar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
