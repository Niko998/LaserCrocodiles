import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shopClicked: boolean=false;
  blogClicked: boolean=false;
  crocClicked: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onShopClick() {
    this.shopClicked=true;
    this.blogClicked=false;
    this.crocClicked=false;
  }
  onBlogClick() {
    this.shopClicked=false;
    this.blogClicked=true;
    this.crocClicked=false;
  }
  onCrocClick() {
    this.shopClicked=false;
    this.blogClicked=false;
    this.crocClicked=true;
  }
  getShopColor() {
    return this.shopClicked ? "#C0C0C0" : '#DCDCDC';
  }
  getBlogColor() {
    return this.blogClicked ? "#C0C0C0" : '#DCDCDC';
  }
  getCrocColor() {
    return this.crocClicked ? "#C0C0C0" : '#DCDCDC';
  }
}
