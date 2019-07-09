import { CurrencyService } from './../currency.service';
import { Component, OnInit } from '@angular/core';
import { filter , map} from 'rxjs/operators';

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
    const complete = () => {
      this.length = this.rates.length;
    }
    const mapCallback = ({rates}) => {
      const currency = Object.keys(rates)[0];
      const value = rates[currency];
      return {icon : '🏦', currency, value}
    } ;
    const filterCallback = ({value}) => value > 2;
    const Observer = this.CurrencyService.Observer;
    const observable = Observer
    .pipe(map(mapCallback),filter(filterCallback))
    .subscribe({next: action,complete});
  }

}
