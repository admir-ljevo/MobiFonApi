import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MojConfig} from "../../moj-config";

@Component({
  selector: 'app-edit-telefon',
  templateUrl: './edit-telefon.component.html',
  styleUrls: ['./edit-telefon.component.css']
})
export class EditTelefonComponent implements OnInit {


  @Input() editTelefon: any

  proizvodjaci: any;

  constructor(private httpKlijent: HttpClient) { }

  preuzmiProizvodjace(){
    this.httpKlijent.get(MojConfig.adresa_servera+"/Proizvodjac/GetAll", this.proizvodjaci).subscribe(
      (x: any)=>{
        this.proizvodjaci=x;
      }
    )
  }



  ngOnInit(): void {
    this.preuzmiProizvodjace();
  }

  snimi() {
    this.httpKlijent.post(MojConfig.adresa_servera+"/Telefon/Update/" + this.editTelefon.id, this.editTelefon).subscribe(
      (x: any)=>{
        alert("Uspješno ste evidentirali telefon: "  + this.editTelefon.model)

      }
    )
  }
}
