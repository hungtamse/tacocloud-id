import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})

@Injectable()
export class DesignComponent implements OnInit {

  model = {
    name: '',
    ingredients: []
  };
  allIngredients: any;
  wraps = [];
  proteins = [];
  veggies = [];
  cheeses = [];
  sauces = [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/ingredientsx').subscribe(
      data => {
        this.allIngredients = data;
        this.wraps = this.allIngredients.filter(w => w.type === 'WRAP');
        this.proteins = this.allIngredients.filter(p => p.type === 'PROTEIN');
        this.veggies = this.allIngredients.filter(v => v.type === 'VEGGIES');
        this.cheeses = this.allIngredients.filter(c => c.type === 'CHEESE');
        this.sauces = this.allIngredients.filter(s => s.type === 'SAUCE');
      }
    );
  }

  updateIngredients(ingredient, event){
    if (event.target.checked){
      this.model.ingredients.push(ingredient);
    }
    else{
      this.model.ingredients.splice(this.model.ingredients.findIndex(i => i === ingredient), 1);
    }
  }

  onSubmit(): void{
    this.httpClient.post('htpp://localhost:8080/design',
      this.model,
      {headers: new HttpHeaders().set('Content-type', 'application/json') });
    this.router.navigate(['/cart']);
  }
}
