import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  modalVisible = false;

  onSubmit(event: Event) {
    event.preventDefault(); // evita recarga de página
    this.modalVisible = true;
    console.log('Modal visible set to true');
  }

  cerrarModal() {
    this.modalVisible = false;
    console.log('Modal visible set to false');
  }
}
