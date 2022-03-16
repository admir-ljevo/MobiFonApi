import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MojConfig} from "../../moj-config";

@Component({
  selector: 'app-telefon-detalji',
  templateUrl: './telefon-detalji.component.html',
  styleUrls: ['./telefon-detalji.component.css']
})
export class TelefonDetaljiComponent implements OnInit {

  sub: any;
  telefonPodaci: any;
  private id: number = 0;

  constructor(private httpKlijent: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.preuzmiPodatke();
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  preuzmiPodatke(){
     this.httpKlijent.get(MojConfig.adresa_servera+`/Telefon/GetByTelefon?id=${this.id}`).subscribe((x: any)=>{
       this.telefonPodaci=x;
     })
  }



}
