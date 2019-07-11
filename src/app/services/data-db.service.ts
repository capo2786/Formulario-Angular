import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { MessageI} from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
private contactCollection: AngularFirestoreCollection<MessageI>;


  constructor(private afs: AngularFirestore,  ) { 
    this.contactCollection = afs.collection<MessageI>('contactos')
  }

  saveMessage(newContacto: MessageI): void {
    this.contactCollection.add(newContacto);


  }

}
