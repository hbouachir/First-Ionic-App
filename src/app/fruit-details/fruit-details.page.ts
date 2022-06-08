import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Fruit } from '../fruit';
import { FruitServiceService } from '../fruit-service.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {
  loadedFruit: Fruit;

  constructor(
    private fruitService: FruitServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertContr: AlertController,

    ) { }
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      param=>{
        if (!param.has('fruitId')){
          this.router.navigate(['/home']);

          return;
        }
        const fruitId=param.get('fruitId');

        this.loadedFruit= this.fruitService.getOneFruit(fruitId);

      }
    );
  }


  deleteFruit(){
    console.log(this.loadedFruit);
    this.alertContr.create(
      {header:'Are you sure?',
      message:'Do you really want to delete this fruit?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
    {
        text:'Delete',
        handler:()=>{
          this.fruitService.deleteFruit(this.loadedFruit.id);

          this.router.navigate(['/home']);

          console.log(this.fruitService.getAllFruit());

        }

    }]

      }
    ).then(el=>{
      el.present();
    });
    console.log(this.loadedFruit);


    }

    addToCart(){

      let products = [];
    if(localStorage.getItem('Cart')){
        products = JSON.parse(localStorage.getItem('Cart'));
    }
    products.push(this.loadedFruit);

    localStorage.setItem('Cart', JSON.stringify(products));


    }



}
