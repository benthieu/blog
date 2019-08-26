import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogOverviewComponent} from './blog-overview/blog-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogOverview', pathMatch: 'full' },
  { path: 'blogOverview',  component: BlogOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
