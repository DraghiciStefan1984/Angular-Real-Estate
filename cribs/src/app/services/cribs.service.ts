import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
