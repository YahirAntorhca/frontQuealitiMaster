import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserDetailComponent } from './userDetail/user-detail/user-detail.component';
import { UserInsertComponent } from './userDetail/user-insert/user-insert.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserInsertComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
