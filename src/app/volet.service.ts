import { Injectable } from '@angular/core';
import { VOLETS } from './mock-volets';
import {Volet} from './volet';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoletService {

  constructor() { }

  getVolet(id: number): Observable<Volet> {
    // TODO: send the message _after_ fetching the hero
    return of(VOLETS.find(volet => volet.id === id));
  }
}
