import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  jogos: any[]  = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 4; i++){
      this.jogos.push(i);

    }
  }

}
