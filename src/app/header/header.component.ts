import { state } from './../app.def';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeToDarkMode(agreed: boolean){

    this.voted.emit(agreed);
    //console.log(agreed["checked"]);

    if(!agreed["checked"]){
      document.querySelector("body > app-root > main > app-index > div > app-header > mat-toolbar").className+=" darkToolBar";
      /*document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > span:nth-child(1) > a").className="darkText";
      document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > ul > li > a.mat-focus-indicator.mat-button.mat-button-base.active > span").className+=" darkText";
      document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > ul > li > a:nth-child(2) > span").className+=" darkText";
      */
      agreed["checked"] = true;
    }
    else{
      document.querySelector("body > app-root > main > app-index > div > app-header > mat-toolbar").classList.remove("darkToolBar");
      /*document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > span:nth-child(1) > a").classList.remove("darkText");
      document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > ul > li > a.mat-focus-indicator.mat-button.mat-button-base.active > span").classList.remove("darkText");
      document.querySelector("body > app-root > main > app-index > app-header > mat-toolbar > ul > li > a:nth-child(2) > span").classList.remove("darkText");
      */
      agreed["checked"] = false;
    }

  }
}
