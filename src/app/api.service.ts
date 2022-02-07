import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FormObject } from './models/FormObject';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  listData2: FormObject[] = [];
  
  constructor(private firestore: AngularFirestore) { }

  saveItem(data: FormObject): Promise<any> {
    return this.firestore.collection('items').add(data);
  }

  getItem(): Observable<any> {
    return this.firestore.collection('items', ref => ref.orderBy('added', 'asc')).snapshotChanges();
  }

  deleteItem(id: string): Promise<any> {
    return this.firestore.collection('items').doc(id).delete();
  }

}