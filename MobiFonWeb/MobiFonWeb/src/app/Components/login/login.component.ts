import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {MojConfig} from "../../moj-config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
invalidLogin: boolean = false;
  constructor(private httpKlijent: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    const credentials = {
      'KorisnickoIme': form.value.KorisnickoIme,
      'Lozinka': form.value.Lozinka
    }

    this.httpKlijent.post(MojConfig.adresa_servera+"/Auth/Login", credentials).subscribe(response =>{
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin=false;
      this.router.navigate(["/telefoni"]);
    }, error => {
      this.invalidLogin=true;
      console.log(error);
    })

  }

}
