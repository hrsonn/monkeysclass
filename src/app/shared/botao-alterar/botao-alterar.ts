import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-alterar',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './botao-alterar.html',
  styleUrl: './botao-alterar.css',
})
export class BotaoAlterar {

  @Input() texto: string = 'Confirmar';
  @Input() icone: string = 'check';

}