import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelefoniComponent} from "./Components/telefoni/telefoni.component";

const routes: Routes = [
  {path: 'telefoni', component: TelefoniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
