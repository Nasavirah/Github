import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imported components for routing purpose
import { UserListsComponent } from './components/user-lists/user-lists.component'
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UserListsComponent },
  { path: ':username', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
