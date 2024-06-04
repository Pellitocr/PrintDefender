import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Not-Found', component: NotFoundComponent},
  {path: '**', redirectTo: 'Not-Found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled', useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
