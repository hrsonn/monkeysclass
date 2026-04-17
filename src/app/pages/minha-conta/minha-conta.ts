import { Component } from '@angular/core';
import { BotaoAlterar } from "../../shared/botao-alterar/botao-alterar";
import { BotaoCancelar } from "../../shared/botao-cancelar/botao-cancelar";

@Component({
  selector: 'app-minha-conta',
  imports: [BotaoAlterar, BotaoCancelar],
  templateUrl: './minha-conta.html',
  styleUrl: './minha-conta.css',
})
export class MinhaConta {}
