import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  private fruits: Fruit[]= [
    {
      id: '1',
      name : 'Apple',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg',
      price : 35
    },
    {
      id:'2',
      name : 'Banana',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg',
      price : 12
    },
    {
      id:'3',
      name : 'Grapes',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg',
      price : 45
    },
    {
      id:'4',
      name : 'Pineapple',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg',
      price : 200
    }
  ];
  constructor() {  }

  getAllFruit(){
    return [...this.fruits];
  }

  getOneFruit(idFruit: string){
    return {...this.fruits.find(fruit=>fruit.id===idFruit)};
  }

  deleteFruit(idFruit){
    this.fruits=this.fruits.filter(fruit=>fruit.id!==idFruit);
    return [...this.fruits];
  }



}
