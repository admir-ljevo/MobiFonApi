import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../moj-config";

@Component({
  selector: 'app-telefoni',
  templateUrl: './telefoni.component.html',
  styleUrls: ['./telefoni.component.css']
})
export class TelefoniComponent implements OnInit {

  telefonPodaci: any;

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

  }

  detalji(s: any) {

  }

  maticnaknjiga(s: any) {

  }
}
