import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter2',
  templateUrl: './emitter2.component.html',
  styleUrls: ['./emitter2.component.css']
})
export class Emitter2Component implements OnInit {
  currentNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(event: number): void {
    this.currentNumber = event;
  }

}
