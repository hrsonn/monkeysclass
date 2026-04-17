import { Component } from '@angular/core';
import { BotaoConfirmar } from "../../shared/botao-confirmar/botao-confirmar";
import { BotaoCancelar } from "../../shared/botao-cancelar/botao-cancelar";
import { BotaoAlterar } from "../../shared/botao-alterar/botao-alterar";
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-turmas',
  imports: [BotaoConfirmar, BotaoCancelar, BotaoAlterar, MatDialogModule],
  templateUrl: './turmas.html',
  styleUrl: './turmas.css',
})
export class Turmas {}
