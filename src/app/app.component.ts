import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore, private db: ApiService) {
    this.items = firestore.collection('items').valueChanges();
  }

  inputName = '';
  
  onUpdateInputName(event: Event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }

  addItem() {
    this.db.logToConsole(this.inputName);
  }
}
