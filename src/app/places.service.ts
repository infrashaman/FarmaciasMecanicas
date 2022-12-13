import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Place } from '../app/Interfaces/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place ){
    const placeRef = collection(this.firestore, 'datos');
    return addDoc(placeRef, place);
  }
}
