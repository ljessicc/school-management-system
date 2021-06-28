import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './instructor/dash/dash.component';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {path: 'instructor', component:InstructorComponent},
  {path: 'dashboard', component:DashComponent},
  {path: 'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
