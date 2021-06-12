import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {path: '', loadChildren: () => import("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule), component: AdminLayoutComponent},
  
  {
    path: '**',
    redirectTo: 'user'
  },
  {path:"main", loadChildren: () => import("./main/main.module").then(m => m.MainModule)},
  {path: "addpost", loadChildren: () => import("./addpost/addpost.module").then(m => m.AddpostModule)},
  {path: "post/:id", loadChildren: () => import("./post/post.module").then(m => m.PostModule)}
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration:"enabled"})  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
