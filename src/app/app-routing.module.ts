import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ServicesComponent } from './pages/components/services/services.component';

const routes: Routes = [
  { path: "", redirectTo:'home' , pathMatch: "full" },
  { path: "home", component:HomeComponent},
  { path: "services", component:ServicesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
