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
  currencies: { name: string, value: object }[];
  currency1: string = "CAD";
  currency2: string = "CAD";
  value1: number = 0;
  value2: number = 0;
  input1: number = 0;
  input2: number = 0;
  private inputVar: string;
  converterForm: FormGroup;

  private url = 'https://api.exchangeratesapi.io/latest?';
  private url1 = 'https://api.exchangeratesapi.io/latest?symbols=${currency}';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.converterForm = formBuilder.group({
      value1: ['', ConverterComponent.InvalidInput],
      value2: ['', ConverterComponent.InvalidInput]
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
        let value: object = values[i];
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
    this.value1 = input.value;
  }
  getInput2(input) {
    this.value2 = input.value;
  }

  setValue1() {
    return this.convert();
  }

  setValue2() {
    return this.convert();
  }

  convert() {
    if (this.input1)
      return this.input1 / this.value2;
    return this.input2 * this.value1;
  }

  static InvalidInput(value): ValidationErrors | null {
    const pattern = /^[0-9\.]+$/i;
    if ((value != "") && !pattern.test(value))
      return { InvalidInput: { message: "Provide valid value" } }
    return null;
  }


}

