import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 22;
  font = 'Arial';
  color = 'red';

  classes = ["small-title", "green-title"];
  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
