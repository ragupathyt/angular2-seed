import {Component, OnInit} from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Http } from '@angular/http';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  categories = [];
  constructor(private _categoriesService: CategoriesService){}
  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe(resCategoriesData => this.categories = resCategoriesData);
  }
}
