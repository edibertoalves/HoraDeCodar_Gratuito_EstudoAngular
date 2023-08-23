import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // animals: Animal[] = [
  //   { name: "Turca", type: 'dog', age: 4 },
  //   { name: "Tom", type: 'cat', age: 10 },
  //   { name: "Frida", type: "dog", age: 5 },
  //   { name: "Bob", type: "horse", age: 1 }
  // ]

  // animal: Animal[] = [
  //   {name: 'Teste', type: 'Alguma coisa', age: 10}
  // ]

  animals: Animal[] = []
  id: string = '';

  animalDetails = "";

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe(animals => this.animals = animals);
  }

  showAge(animal: Animal) {
    this.animalDetails = ` o pet ${animal.name} tem ${animal.age} anos. `;
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal...');
    this.animals = this.animals.filter((a) => animal.name !== a.name) // exclusão no front-end
    this.listService.remove(animal.id.toString()).subscribe();
  }

  create(animal: Animal) {

  }
}
