import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"", component:ItemsSectionComponent},
    {path:"home", redirectTo:"", pathMatch:"full"},
    {path:"products-section", redirectTo:"", pathMatch:"full"},
    {path:"add-product", component:FormComponentComponent},
    {path:"update-product", component:FormComponentComponent},
    {path:"product-details", component:ProductDetailsComponent},
    {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
