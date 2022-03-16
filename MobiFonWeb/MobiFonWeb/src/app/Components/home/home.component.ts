import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MojConfig} from "../../moj-config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpKlijent: HttpClient, private router: Router) { }
  telefoni: any;
  brendovi: any;
  brendId: number = 0;
  filtriraniTelefoni: any = null;
  preuzmiBrendove(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Proizvodjac/GetAll", this.brendovi).subscribe(x=>{
      this.brendovi=x;
    })
  }

  preuzmiTelefone(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Telefon/GetAll", this.telefoni).subscribe(x=>{
      this.filtriraniTelefoni=x;
      this.telefoni=x;
      }
    )
  }

  filtriraj(s : any){
    this.brendId=s.id;
    console.log(s.id)
    this.filtriraniTelefoni = this.telefoni.filter((x: any)=> x.proizvodjacId==this.brendId);

  }

  ngOnInit(): void {
    this.preuzmiBrendove();
    this.preuzmiTelefone();
  }


  Detalji(x: any) {
    this.router.navigate(['telefon-detalji', x.id]);
  }
}
