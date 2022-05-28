import {Component, Input, OnInit} from '@angular/core';
import {ScanResult} from "../../models/scan.response";

@Component({
  selector: 'app-scan-result-list',
  templateUrl: './scan-result-list.component.html',
  styleUrls: ['./scan-result-list.component.scss']
})
export class ScanResultListComponent implements OnInit {

  @Input() scanResults: ScanResult | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
