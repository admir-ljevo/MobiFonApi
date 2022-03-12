import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../moj-config";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

  telefonPodaci: any;
  urediTelefon: any;

  constructor(private httpKlijent: HttpClient) { }

  ngOnInit(): void {
    this.preuzmiPodatke();
  }

  preuzmiPodatke(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Telefon/GetAll", this.telefonPodaci).subscribe(
      (x: any)=>{
        this.telefonPodaci=x;
        alert("Podaci preuzeti");
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

  maticnaknjiga(s: any) {

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
      prikazi: true
    }
  }

}
