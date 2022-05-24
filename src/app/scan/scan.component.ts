import { Component, OnInit } from '@angular/core';
import {ScanService} from "../services/scan.service";
import { Observable, startWith, Subject, tap} from "rxjs";
import { ScanResponse } from "../models/scan.response";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  domain!: string;
  responseSubject = new Subject<ScanResponse[]>();
  response$: Observable<ScanResponse[]> = this.responseSubject.asObservable().pipe(startWith([]));
  loading$ = this.scanService.loading$;

  constructor(private scanService: ScanService) { }

  ngOnInit(): void {
  }

  scan() {
    this.scanService.scan(this.domain).pipe(
      tap(value => {
        this.responseSubject.next(value);
      })
    ).subscribe()
  }
}
