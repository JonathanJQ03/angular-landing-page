import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  habilidades = [
  {
    id: 1,
    imagen: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dVRNj-7iK3PJgfJIpCNr5Q.jpeg',
    titulo: 'HTML',
    nivel: '45%',
    color: 'bg-blue-600 dark:bg-blue-500'
  },
  {
    id: 2,
    imagen: 'https://static.wixstatic.com/media/1de218_40397be0e83f457a816f1c6c07f7203f~mv2.jpg',
    titulo: 'CSS',
    nivel: '60%',
    color: 'bg-green-600 dark:bg-green-500'
  },
  {
    id: 3,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cXGdrSe5t1778E5BSYemJsdsBR_TYQaOSg&s',
    titulo: 'JavaScript',
    nivel: '75%',
    color: 'bg-yellow-400'
  },
  {
    id: 4,
    imagen: 'https://opensource.google/images/projects/os-projects-angular_thumbnail.png',
    titulo: 'Angular',
    nivel: '55%',
    color: 'bg-red-600 dark:bg-red-500'
  }
];


  eleccion = signal<number | null>(null);

 
  habilidadSeleccionada = computed(() =>
    this.habilidades.find(h => h.id === this.eleccion())
  );
habilidad: any;

  constructor() {
    effect(() => {
      const idSeleccionado = this.eleccion();
      if (idSeleccionado !== null) {
        console.log('Elegiste ID:', idSeleccionado);
      }
    });
  }

  limpiarSeleccion() {
    this.eleccion.set(null);
  }
}
