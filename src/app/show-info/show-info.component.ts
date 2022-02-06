import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.showItem();
  }

  showItem() {
    this._apiService.getItem().subscribe(doc => {
      console.log(doc)
      doc.forEach((element: any) => {
        console.log(element.payload.doc.id)
        console.log(element.payload.doc.data());
      });
    })
  }

}
