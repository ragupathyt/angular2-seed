import {Component, OnInit} from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Http } from '@angular/http';

@Component({
  selector: 'details',
  styleUrls: ['./details.component.css'],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  categories = [];
  constructor(private _categoriesService: CategoriesService){}
  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe(resCategoriesData => this.categories = resCategoriesData);
  }
}
