import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {
  animal:Animal
  animalList:Array<Animal>;

  constructor() { 
    this.animalList = [];
    this.animal = new Animal('소',10);
    this.animalList.push(this.animal)
    this.animal = new Animal('개',12);
    this.animalList.push(this.animal)
    this.animal = new Animal('쥐',13);
    this.animalList.push(this.animal)
    this.animal = new Animal('닭',14);
    this.animalList.push(this.animal)
  }

  ngOnInit() {
  }

}
