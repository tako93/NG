import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicModule } from '../public/public.module'

@NgModule({
  declarations: [
    CompComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
     RouterModule.forChild([
      {
        path: 'auth/sign-in',
        component: SignInComponent,
      
      },
       {
        path: 'auth/sign-up',
        component: SignUpComponent,
        
       },
       {
        path: 'auth/dashboard',
        component: DashboardComponent,
       canActivate: [AuthGuard]
       },
      {
        path: 'auth/comp',
        component: CompComponent,
        canActivate: [AuthGuard]
       },
     
     
    ])
  ]
})
export class AuthModule { }
