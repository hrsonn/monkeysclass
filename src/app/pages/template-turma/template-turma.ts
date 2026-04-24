import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-template-turma',
  imports: [MatIconModule],
  templateUrl: './template-turma.html',
  styleUrl: './template-turma.css',
})
export class TemplateTurma {
  alunos = Array.from({ length: 32 }, (_, i) => `Aluno ${i + 1}`);
}
