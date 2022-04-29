import { Component, OnInit } from '@angular/core';
import {ScanService} from "../services/scan.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  domain!: string;
  response: any;
  loading$ = this.scanService.loading$;

  constructor(private scanService: ScanService) { }

  ngOnInit(): void {
  }

  scan() {
    this.scanService.scan(this.domain).pipe(
      tap(value => {
        this.response = value;
      })
    ).subscribe()
  }
}
