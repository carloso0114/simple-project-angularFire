import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormObject } from '../models/FormObject';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listData2: FormObject[] = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem() {
    this._apiService.getItem().subscribe(doc => {
      this.listData2 = [];
      doc.forEach((element: any) => {
        this.listData2.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    })
  }
}
