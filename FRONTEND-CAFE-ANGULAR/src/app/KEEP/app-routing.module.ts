import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cafe', component: FullComponent, children: [
    
    {path: '', redirectTo: '/cafe/dashboard', pathMatch: 'full'},
    {path: '', loadChildren:() => import('./material-component/')}
  
  
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
