import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, shareReplay, startWith, Subject, tap, throwError} from "rxjs";
import { ScanResult } from "../models/scan.response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private loading = new Subject<boolean>();
  loading$ = this.loading.asObservable().pipe(startWith(false));

  scanResults$: BehaviorSubject<ScanResult> = new BehaviorSubject<ScanResult>({domain: '', targets: [], errors:[]});

  constructor(private http: HttpClient) {
  }

  scan(formValue: {target: string, port: number, protocol: string}): Observable<ScanResult> {
    this.setLoading(true);
    let params = new HttpParams()
      .set("target", formValue.target)
      .set("port", formValue.port)
      .set("network", formValue.protocol);
    return this.http.get<ScanResult>(`${environment.api}/api/scan`, {params}).pipe(
      catchError((error) => {
        this.setLoading(false);
        return throwError(error);
      }),
      tap((data) => {
        console.log(data);
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
