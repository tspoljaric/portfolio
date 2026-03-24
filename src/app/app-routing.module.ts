import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ElipsoPageComponent } from './elipso-page/elipso-page.component';
import { IrisPageComponent } from './iris-page/iris-page.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
{ path: 'home', component: HomePageComponent },
{ path: 'elipso', component: ElipsoPageComponent },
{ path: 'iris', component: IrisPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
