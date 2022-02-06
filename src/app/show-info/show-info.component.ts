import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormObject } from '../models/FormObject';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  listData: FormObject[] = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this._apiService.getItem().subscribe(doc => {
      this.listData = [];
      doc.forEach((element: any) => {
        this.listData.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    })
  }

}
