import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormObject } from './models/FormObject';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private firebase: AngularFirestore) { }

  saveItem(data: FormObject): Promise<any> {
    return this.firebase.collection('items').add(data);
  }

  getItem(): Observable<any> {
    return this.firebase.collection('items').snapshotChanges();
  }

}