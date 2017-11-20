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

  categories = [];
  sortBy = '';
  reverseSort = false;
  constructor(private _categoriesService: CategoriesService){}
  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe(resCategoriesData => this.categories = resCategoriesData);
  }

  sortedCategories = function() {
    let orderSort = this.reverseSort ? 'desc' : 'asc';
    this.categories = _.orderBy(this.categories, [this.sortBy], [orderSort]);
  }
  setSortBy = function(value) {
    this.reverseSort = this.sortBy == value ? !this.reverseSort : false;
    this.sortBy = value;
    this.sortedCategories();
  }
  
}
