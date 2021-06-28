import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import {  faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faHouseUser} from '@fortawesome/free-solid-svg-icons/faHouseUser';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  UserIcon = faUser;
  circleIcon = faCircle;
  houseIcon = faHouseUser;
  squareIcon =faSquare;

  constructor(public vps:ViewportScroller) { }

  ngOnInit(): void {
    
  }

  // function that takes in an anchor as a string and scrolls to the anchor
  scrollFunction(anchor:string) {
    this.vps.scrollToAnchor(anchor);
  }

}
