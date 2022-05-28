import { Component, OnInit } from '@angular/core';
import {ScanService} from "../services/scan.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  scanForm: FormGroup = this.fb.group({
    target: new FormControl(''),
    port: new FormControl(443),
    protocol: new FormControl('tcp')
  });

  loading$ = this.scanService.loading$;
  scans$ = this.scanService.scanResults$;

  constructor(private fb: FormBuilder, private scanService: ScanService) { }

  ngOnInit(): void {
  }

  scan() {
    this.scanService.scan(this.scanForm.value).subscribe();
  }
}
