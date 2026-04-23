import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NovaTurma } from "../nova-turma/nova-turma";

@Component({
  selector: 'app-turmas',
  imports: [ MatDialogModule, NovaTurma],
  templateUrl: './turmas.html',
  styleUrl: './turmas.css',
})
export class Turmas {}
