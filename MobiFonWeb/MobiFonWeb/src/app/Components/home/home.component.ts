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

  brendovi: any;

  preuzmiBrendove(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Proizvodjac/GetAll", this.brendovi).subscribe(x=>{
      this.brendovi=x;
    })
  }

  ngOnInit(): void {
    this.preuzmiBrendove();
  }

}
