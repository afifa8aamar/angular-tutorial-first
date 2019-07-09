import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';

import { data } from './currencies';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies;
  Observer;

  constructor(private HttpClient: HttpClient) {
    this.currencies = data;
    this.Observer = new Observable(this.subscribe());
    console.log(this.Observer)
  }

  subscribe() {
    return (subscriber) => {
      let i = 0;
      const size = this.currencies.length;

      from(this.currencies).subscribe((currency) => {
        const url = `https://api.exchangeratesapi.io/latest?symbols=${currency}`;
        this.HttpClient.get(url).subscribe((value) => {
          i++;
          subscriber.next(value);
          if (i === size) {
            subscriber.complete();
          }
        });
      });
    }
  }

  filter(cb) {
    this.currencies = this.currencies.filter(cb);
    return this;
  }


  map(cb) {
    this.currencies = this.currencies.map(cb);
    return this;
  }

}