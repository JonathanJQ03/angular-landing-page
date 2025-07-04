import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import TypeIt from 'typeit';

@Component({
  selector: 'app-information-component',
  imports: [RouterModule],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new TypeIt("#simpleUsage", {
    strings: "Jonathan Javier Jaguaco Quituisaca",
    speed: 75,
    waitUntilVisible: true,
  }).go();
  }
}
