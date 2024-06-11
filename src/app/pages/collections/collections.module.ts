import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { ProductComponent } from '../product/product.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: ':id', component: GlossaryComponent},
  { path: ':category/Product/:id', component: ProductComponent}
];

@NgModule({
  declarations: [
    CatalogComponent,
    GlossaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class CollectionsModule { }
