import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogEntryComponent} from './blog-entry.component';


const routes: Routes = [
    {
        path: '',
        component: BlogEntryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogEntryRoutingModule {}
