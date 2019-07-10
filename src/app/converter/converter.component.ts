import { CurrencyService } from './../currency.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  currencies: Array<{ name: string, value: object }> = [];
  currency1: string = "CAD";
  currency2: string = "CAD";
  value1;
  value2;
  input1: number = 0;
  input2: number = 0;
  converterForm: FormGroup;

  private url = 'https://api.exchangeratesapi.io/latest?';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.converterForm = formBuilder.group({
      value1: "",
      value2: ""
    });
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.currencies = response['rates'];

      type cur = { name: string, value: object };
      let currenciesArray: cur[] = [];
      const keys = Object.keys(this.currencies);
      const values = Object.values(this.currencies);
      for (let i = 0; i < keys.length; i++) {
        let name = keys[i];
        let value = values[i];
        let finalObj: cur = { name, value }
        currenciesArray.push(finalObj);
      }
      this.currencies = currenciesArray;
    })

  }
  getCurrency1(currency) {
    this.currency1 = currency.value;
  }
  getCurrency2(currency) {
    this.currency2 = currency.value;
  }
  getInput1(input) {
    this.input1 = input.value;
  }
  getInput2(input) {
    this.input2 = input.value;
  }

  setInput1() {
    if (this.currency1 == this.currency2)
      return this.input2;
    for (let i = 0; i < this.currencies.length; i++) {
      if (this.currency1 == this.currencies[i].name)
        this.value1 = this.currencies[i].value;
    }
    return this.input2 * this.value1;
  }

  setInput2() {
    if (this.currency1 == this.currency2)
      return this.input1;
    for (let i = 0; i < this.currencies.length; i++) {
      if (this.currency2 == this.currencies[i].name)
        this.value2 = this.currencies[i].value;
    }
    return this.input1 * this.value2;
  }



}


