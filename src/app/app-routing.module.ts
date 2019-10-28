import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './pages/inicial/inicial.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'home', component: InicialComponent},
  {path:'contact', component: ContactComponent},
  {path:'', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
