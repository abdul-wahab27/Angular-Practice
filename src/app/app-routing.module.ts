import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'tasks',component:TasksComponent},
  {path:'pictures', component:PicturesComponent},
  {path:'posts', component:PostsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
