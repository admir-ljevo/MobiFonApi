import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class BannersComponent implements OnInit {


  constructor() { }

  public current=0;

  public banners: any = [
    {
      "id": 1,
      "naziv": "banner1",
      "url": "../../../assets/slike/banner1.jpg"
    },
    {
      "id": 2,
      "naziv": "banner2",
      "url": "../../../assets/slike/banner2.jpg"
    },
    {
      "id": 3,
      "naziv": "banner3",
      "url": "../../../assets/slike/samsung_banner.jpg"
    }

  ];


  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.banners.length;
    }, 5000);
  }

}
