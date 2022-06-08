import { Component, OnInit } from '@angular/core';

import { Fruit } from '../fruit';
import { FruitServiceService } from '../fruit-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fruit: Fruit[]=[];
  prixtotal=0;
  constructor(
    private fruitService: FruitServiceService

    ) {}



  ngOnInit(){
    console.log(this.fruit);
    this.fruit=this.fruitService.getAllFruit();
    console.log(this.fruit);



    let products = [];
    if(localStorage.getItem('Cart')){
        products = JSON.parse(localStorage.getItem('Cart'));
    }

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0;i<products.length;i++){
      this.prixtotal+=products[i].price;
    }



  }



}
