import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelefoniComponent} from "./Components/telefoni/telefoni.component";
import {LoginComponent} from "./Components/login/login.component";
import {JwtModule} from "@auth0/angular-jwt";
import {AuthGuard} from "./guards/auth-guard.service";
import {HomeComponent} from "./Components/home/home.component";

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

const routes: Routes = [
  {path: 'telefoni', component: TelefoniComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      allowedDomains: ["localhost:44356"],
      disallowedRoutes: []
    }
  })
  ],

  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
