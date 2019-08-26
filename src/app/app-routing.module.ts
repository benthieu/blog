import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogOverviewComponent} from './blog-overview/blog-overview.component';
import {BlogEntryComponent} from './blog-entry/blog-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog',  component: BlogOverviewComponent },
  { path: 'blog/:id' , component: BlogEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
