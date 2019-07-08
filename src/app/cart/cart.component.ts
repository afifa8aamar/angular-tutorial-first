import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm: FormGroup;
  constructor(private CartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.CartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: ['', [this.forbiddenName(),Validators.minLength(4)]],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }, {
          validators: this.crossValidation
        })
    })
  }

  onSubmit(customerData) {
    console.warn("Your order has been submitted", customerData);
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

  setDefault() {
    // this.checkoutForm.get('name').setValue("John Boe");
    // this.checkoutForm.get('address').setValue("Tbilisi");
    this.checkoutForm.patchValue({ name: 'John Doe' });
  }

  RemoveFromCart(product) {
    this.CartService.RemoveFromCart(product);
    this.items = this.CartService.getItems();
  }

  IsNotEmpty() {
    if (this.CartService.getItems().length > 0) {
      return true;
    } else {
      return false;
    }
  }
  clearCart() {
    this.CartService.clearCart();
    this.items = this.CartService.getItems();
  }
  get name() {
    return this.checkoutForm.get('name') as FormControl;
  }
  get address() {
    return this.checkoutForm.get('address') as FormGroup;
  }
  get city() {
    return this.checkoutForm.get('address').get('city') as FormControl;
  }
  get zip() {
    return this.checkoutForm.get('address').get('zip') as FormControl;
  }
  get state() {
    return this.checkoutForm.get('address').get('state') as FormControl;
  }
  static isZipValid(zip) {
    return zip.length < 3;
  }
  static isCityValid(city) {
    return city && city[0].toLowerCase() === 'a';
  }
  crossValidation(FormGroup) {
    const zip = FormGroup.get('zip').value;
    const zipStatus = CartComponent.isZipValid(zip);

    const city = FormGroup.get('city').value;
    const cityStatus = CartComponent.isCityValid(city);

    const validationResult = {
      zipStatus,
      cityStatus
    }

    return validationResult.zipStatus && validationResult.cityStatus ? null : validationResult;
  }

  forbiddenName() {
    return (FormControl) => {
      return FormControl.value === 'Oliver' ? { forbiddenName: { invalid: true } } : null;
    }
  }
}
