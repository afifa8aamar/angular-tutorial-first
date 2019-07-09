import { CurrencyService } from './../currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  rates : Array<object> = [];
  length: number;
  constructor(private CurrencyService: CurrencyService) { 
    
  }

  ngOnInit() {
    const action = (value) => {
      this.rates.push(value);
    }
    const complete = (length) => {
      this.length = length;
    }
    const observable = this.CurrencyService.subscribe(action,complete);
  }

}
