import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './commits/commits.component';
import { HomeComponent } from './home/home.component';
import { StackComponent } from './stack/stack.component';

const routes: Routes = [
  { path: 'commits', component: CommitsComponent },
  { path: '', component: HomeComponent },
  { path: 'stack', component: StackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
