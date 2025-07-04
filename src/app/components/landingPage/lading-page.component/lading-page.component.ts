import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component/header.component';
import { InformationComponent } from '../../personalInformation/information.component/information.component';
import { SkillsComponent } from '../../skills/skills.component/skills.component';
import { FormComponent } from '../../form/form.component/form.component';

@Component({
  selector: 'app-lading-page.component',
  imports: [RouterModule,HeaderComponent,InformationComponent,SkillsComponent,FormComponent],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.css'
})
export class LadingPageComponent {

}
