import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './_services/product/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AsideBarComponent,
    ItemsSectionComponent,
    ProductComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
