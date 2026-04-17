import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.html',
  styleUrls: ['./pop-up.css']
})
export class PopUp {

  constructor(private dialogRef: MatDialogRef<PopUp>) {}

  fechar() {
    this.dialogRef.close();
  }
}