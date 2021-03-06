import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './forms/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './forms/product-form/product-form.component';

@NgModule({
  declarations: [TodoFormComponent, ProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [TodoFormComponent, ProductFormComponent]
})
export class PublicModule { }
