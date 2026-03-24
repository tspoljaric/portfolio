import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ElipsoPageComponent } from './elipso-page/elipso-page.component';
import { IrisPageComponent } from './iris-page/iris-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


const routes: Routes = [
  // { path: '', component: LoadingPageComponent, pathMatch: 'full' },
  // // { path: '', component: HomePageComponent },
  // { path: 'home', component: HomePageComponent },
  // { path: 'elipso', component: ElipsoPageComponent },
  // { path: 'iris', component: IrisPageComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ElipsoPageComponent,
    IrisPageComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  exports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
