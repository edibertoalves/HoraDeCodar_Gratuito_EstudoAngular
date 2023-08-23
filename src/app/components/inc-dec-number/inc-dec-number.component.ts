import { Emitter2Component } from './../emitter2/emitter2.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inc-dec-number',
  templateUrl: './inc-dec-number.component.html',
  styleUrls: ['./inc-dec-number.component.css']
})
export class IncDecNumberComponent implements OnInit {
  @Input() count: number = 0;

  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(): void {
    this.count++;
    this.changeNumber.emit(this.count);
  }

  decrementa(): void {
    this.count--;
    this.changeNumber.emit(this.count);
  }

}
