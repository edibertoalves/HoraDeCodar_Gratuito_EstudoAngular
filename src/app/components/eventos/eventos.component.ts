import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = false;
  textoBotao = "";

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show;
  }

  informarTextoBotao(): void {
    this.textoBotao = "clique para esconder";
  }
}


