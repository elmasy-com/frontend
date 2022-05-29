import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, shareReplay, startWith, Subject, tap, throwError} from "rxjs";
import { ScanResult } from "../models/scan.response";
import {environment} from "../../environments/environment";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private loading = new Subject<boolean>();
  loading$ = this.loading.asObservable().pipe(startWith(false));

  scanResults$: BehaviorSubject<ScanResult> = new BehaviorSubject<ScanResult>({domain: '', targets: [], errors:[]});

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  scan(formValue: {target: string, port: number, protocol: string}): Observable<ScanResult> {
    this.errorService.errors$.next(null);
    this.setLoading(true);
    let params = new HttpParams()
      .set("target", formValue.target)
      .set("port", formValue.port)
      .set("network", formValue.protocol);
    return this.http.get<ScanResult>(`${environment.api}/api/scan`, {params}).pipe(
      catchError((error) => {
        this.setLoading(false);
        this.errorService.errors$.next(error);
        return throwError(error);
      }),
      tap((data) => {
        this.scanResults$.next(data);
        this.setLoading(false);
      }),
      shareReplay(1)
    );
  }

  setLoading(state: boolean) {
    this.loading.next(state);
  }
}
