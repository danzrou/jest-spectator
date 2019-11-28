import { Injectable } from '@angular/core';


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


  constructor(private depService: DepService) {
  }

  getDepName() {
    return this.depService.getName();
  }

  getName() {
    return this.constructor.name;
  }
}
