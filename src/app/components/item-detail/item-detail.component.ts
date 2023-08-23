import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListService } from 'src/app/services/list.service';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  animal? : Animal ;

  constructor(private listService: ListService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    const id = this.route.snapshot.paramMap.get("id");
    this.listService.getItem(`${id}`).subscribe((animal) => {this.animal = animal});
  }
}
