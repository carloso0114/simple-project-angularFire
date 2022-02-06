import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { FormObject } from '../models/FormObject';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _apiService: ApiService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  ngOnInit(): void {
  }

  newItem() {
    const DATA: FormObject = {
      name: this.form.value.name
    }
    this._apiService.saveItem(DATA).then(() => {
      this.form.reset();
      console.log('saved')
    }, error => {
      console.log(error)
    })
  }

}
