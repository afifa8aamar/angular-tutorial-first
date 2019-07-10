import { ShippingService } from './../shipping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  selectedShipping;
  constructor(private ShippingService : ShippingService) { 
    this.shippingCosts = this.ShippingService.getShippingPrices();
    this.selectedShipping = this.ShippingService.getType();
  }

  get SelectedShipping() {
    return this.ShippingService.getType();
  }

  selectShipping(value) {
    this.ShippingService.selectType(value);
  }

  ngOnInit() {
  }

}
