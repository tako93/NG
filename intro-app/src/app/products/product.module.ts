import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../products/product-list.component"
import { ConvertToSpace } from '../shared/pipes/convertToSpace.pipe';
import { RatingComponent } from '../rating/rating.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    RatingComponent,
    ConvertToSpace,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([

      {
        path: 'products',
        component: ProductListComponent
      },

    ])
  ]
})
export class ProductModule { }


