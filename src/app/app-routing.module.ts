import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  {
    path: 'blog',
    loadChildren: () => import('./blog-overview/blog-overview.module').then(m => m.BlogOverviewModule)
  },
  {
    path: 'blog/:id' ,
    loadChildren: () => import('./blog-entry/blog-entry.module').then(m => m.BlogEntryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
