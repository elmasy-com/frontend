import { Component, OnInit } from '@angular/core';
import {ScanService} from "../services/scan.service";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  destroy$ = new Subject<boolean>();
  scanForm: FormGroup = this.fb.group({
    target: new FormControl('', Validators.required),
    port: new FormControl(443),
    protocol: new FormControl('tcp')
  });

  loading$ = this.scanService.loading$;
  scans$ = this.scanService.scanResults$;

  constructor(private fb: FormBuilder, private scanService: ScanService, public errorService: ErrorService) { }

  ngOnInit(): void {
  }

  scan() {
    this.scanForm.markAllAsTouched();
    if (this.scanForm.valid) {
      this.scanService.scan(this.scanForm.value).pipe(takeUntil(this.destroy$)).subscribe();
    }
  }

  get controls() {
    return this.scanForm.controls;
  }

  get target(){
    return this.scanForm.get('target');
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
  }
}
