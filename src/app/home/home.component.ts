import {Component, OnInit} from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Http } from '@angular/http';
import * as _ from "lodash";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  constructor(){}
  ngOnInit() {
  
  }
}
