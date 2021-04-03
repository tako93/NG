import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './products-list/product-list.component';
import { ConvertToSpace } from '../shared/pipes/convertToSpace.pipe';
import { RatingComponent } from '../shared/rating/rating.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { AuthGuard } from '../auth.guard';
import { PublicModule } from '../public/public.module';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    RatingComponent,
    ConvertToSpace,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
      },

      {
        path: 'add',
        component: ProductAddComponent,
      },
      {
        path: 'edit/:productId',
        component: ProductEditComponent,  
      },
    ]),
  ],
})
export class ProductModule {}
