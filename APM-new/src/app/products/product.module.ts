import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertSpaceToPipe } from 'src/shared/convert-to-space.pipe';
import { StarComponent } from 'src/shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from 'src/shared/shared.module';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertSpaceToPipe,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: "products",   component: ProductListComponent},
      {path: "products/:id",
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
    }
    ]),
    SharedModule

  ]
})
export class ProductModule { }
