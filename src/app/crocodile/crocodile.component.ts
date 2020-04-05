import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crocodile',
  templateUrl: './crocodile.component.html',
  styleUrls: ['./crocodile.component.css']
})
export class CrocodileComponent implements OnInit {

  crocName: string = 'Crocodillos';
  crocNameClicked: boolean = false;
  crocodiles = [];
  constructor() { }
  
  onNameingCroc() {
    this.crocodiles.push(this.crocName);
    this.crocNameClicked = true;
    
  }

  ngOnInit(): void {
  }

}
