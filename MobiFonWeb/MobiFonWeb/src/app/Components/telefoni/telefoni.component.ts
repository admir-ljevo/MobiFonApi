import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../moj-config";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

  telefonPodaci: any;
  urediTelefon: any;

  constructor(private httpKlijent: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
    this.preuzmiPodatke();
  }

  preuzmiPodatke(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Telefon/GetAll", this.telefonPodaci).subscribe(
      (x: any)=>{
        this.telefonPodaci=x;
      }
    )
  }

  obrisi(s: any) {
    this.urediTelefon=s;
    this.httpKlijent.post(MojConfig.adresa_servera+"/Telefon/Delete/" + this.urediTelefon.id, this.urediTelefon).subscribe((x:any) =>{
      alert("Uspješno ste obrisali " + this.urediTelefon.id);
    })
  }

  detalji(s: any) {
    this.urediTelefon=s;
    this.urediTelefon.prikazi=true;
  }

   isUserAuthenticated(){
      const token: string | null=localStorage.getItem("jwt");
      if(token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      return false;
   }

  btnNovi(){
    this.urediTelefon={
      id:0,
      proizvodjacId: 1,
      model: "",
      kamera: "",
      procesor:"",
      ram: "",
      memorija: "",
      ekran: "",
      garancija: false,
      mjeseciGarancije: 0,
      novo: false,
      prikazi: true,
      cijena : 0
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

}
