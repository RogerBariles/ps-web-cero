import { MyDataComponent } from './profile/my-data/my-data.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
  {path:'login' ,component: LoginComponent},
  {path:'myData', component: MyDataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
