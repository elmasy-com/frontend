import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors$ = new Subject<HttpErrorResponse | null>();

  constructor() { }
}
