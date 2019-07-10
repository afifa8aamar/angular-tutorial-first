import { ShippingService } from './../shipping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  providers: [ShippingService],
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(private ShippingService : ShippingService) { 
    this.shippingCosts = this.ShippingService.getShippingPrices();
  }

  ngOnInit() {
  }

}
