import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import {  faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {faHouseUser} from '@fortawesome/free-solid-svg-icons/faHouseUser';
import { faSquare } from '@fortawesome/free-solid-svg-icons';




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

  constructor() { }

  ngOnInit(): void {
    
  }

}
