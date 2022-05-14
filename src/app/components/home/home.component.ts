import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
_mode='grid';
  constructor() { }

  ngOnInit(): void {
  }
layout(mode:string){
this._mode=mode;
}
}
