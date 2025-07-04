import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  descargarCV(): void {
  const link = document.createElement('a');
  link.href = 'assets/ComputacionDigitalParalelismo.pdf';
  link.download = 'ComputacionDigitalParalelismo.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

}
