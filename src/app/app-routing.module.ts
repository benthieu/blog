import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {BlogOverviewComponent} from './blog-overview/blog-overview.component';
import {BlogEntryComponent} from './blog-entry/blog-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  {
    path: 'blog',
    loadChildren: () => import('./blog-entry/blog-entry.module').then(m => m.BlogEntryModule)
  },
  {
    path: 'blog/:id' ,
    loadChildren: () => import('./blog-overview/blog-overview.module').then(m => m.BlogOverviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
