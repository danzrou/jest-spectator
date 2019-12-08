import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, startWith, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepService {

  constructor() {
  }

  getName() {
    return `DepService`;
  }
}


@Injectable({
  providedIn: 'root'
})
export class MyService {
  name: string;

  constructor(private depService: DepService) {
  }

  getDepName() {
    return this.depService.getName();
  }

  getName() {
    return this.constructor.name;
  }

  getAsyncValue() {
    return timer(300).pipe(
      mapTo('AsyncValue'),
      startWith('AsyncValue')
    );
  }

  callNameAfterSubscribed() {
    return timer(50)
      .pipe(
        startWith('NewName'),
        tap(v => this.setName(v as string))
      );
  }

  setName(name: string) {
    this.name = name;
  }
}
