import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Collections', loadChildren: ()=> import('./pages/collections/collections.module').then(m=> m.CollectionsModule)},
  {path: 'Product', loadChildren: ()=> import('./pages/collections/collections.module').then(m=> m.CollectionsModule)},
  {path: 'Product/:id', component: ProductComponent},
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
