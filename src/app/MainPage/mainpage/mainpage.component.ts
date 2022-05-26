import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  username:any ="suresh chanikya";
  date:any =  new Date;
  currency:any = 123456;
  numbers:any = 6325414;
  percentage:any = 1;
  lowercaselatters:any = "MY NAME IS SURESH CHANIKYA";
  uppercaselatters:any = "hellow world!"
  constructor() { }

  ngOnInit(): void {
  }

}
