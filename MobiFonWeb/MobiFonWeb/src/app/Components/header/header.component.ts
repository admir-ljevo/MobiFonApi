import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() pretragaTelefoni: any;
  telefonOpis: string ="";



  constructor() { }

  ngOnInit(): void {

  }

  filtrirajTelefone(){
    return this.pretragaTelefoni.filter((x: any) => this.telefonOpis.length===0 || (x.model).toLowerCase().startsWith(this.telefonOpis.toLowerCase()));
  }

}
