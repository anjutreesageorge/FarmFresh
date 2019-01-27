import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { FAQComponent } from './faq/faq.component';
import { ReorderComponent } from './reorder/reorder.component';
import { BookTimeSlotComponent } from './book-time-slot/book-time-slot.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ProductSortComponent } from './product/product-sort/product-sort.component';
import { CartAddComponent } from './cart/cart-add/cart-add.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomerRatingComponent } from './customer-rating/customer-rating.component';
import { AboutUsComponent } from './details/about-us/about-us.component';
import { ConnectUsComponent } from './details/connect-us/connect-us.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductModule } from './product/product.module';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    FAQComponent,
    ReorderComponent,
    BookTimeSlotComponent,
    CartAddComponent,
    CartComponent,
    CheckoutComponent,
    PaymentComponent,
    CustomerRatingComponent,
    AboutUsComponent,
    ConnectUsComponent,
    AnalyticsComponent,
    FooterComponent,
    SideBarComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ProductModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
