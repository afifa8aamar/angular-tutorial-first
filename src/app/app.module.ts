import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar-component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component'
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConverterComponent } from './converter/converter.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { ShippingService } from './shipping.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    RegisterComponent,
    UsersComponent,
    CurrencyComponent,
    ConverterComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'users' , component: UsersComponent},
      {path: 'currency' , component: CurrencyComponent},
      {path: 'converter' , component: ConverterComponent},
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'dashboard/news' , component: NewsComponent},
      {path: 'dashboard/news/:articleId' , component: ArticleComponent},
      {path: 'error-page' , component: ErrorPageComponent},
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
