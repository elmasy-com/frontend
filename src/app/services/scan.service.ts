import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, startWith, Subject, tap} from "rxjs";
import {ScanResponse, Security} from "../models/scan.response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private loading = new Subject<boolean>();
  loading$ = this.loading.asObservable().pipe(startWith(false));

  constructor(private http: HttpClient) { }

  scan(target: string, port?: string, network?: string): Observable<ScanResponse[]> {
    this.setLoading(true);
    let params = new HttpParams().set("target", target);
    return this.http.get<ScanResponse[]>(`${environment.api}api/scan`, { params }).pipe(
      tap((data) => this.setLoading(false)),
      catchError((error) => {
        this.setLoading(false);
        return of();
      })
    );

    // return of([{
    //   target: "142.132.164.231",
    //   tls: [
    //     {
    //       version: "tls11",
    //       supported: false,
    //       ciphers: []
    //     },
    //     {
    //       version: "ssl30",
    //       supported: false,
    //       ciphers: []
    //     },
    //     {
    //       version: "tls10",
    //       supported: false,
    //       ciphers: []
    //     },
    //     {
    //       version: "tls12",
    //       supported: true,
    //       ciphers: [
    //         {
    //           Name: "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
    //           Security: Security.Secure
    //         },
    //         {
    //           Name: "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256",
    //           Security: Security.Weak
    //         },
    //         {
    //           Name: "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384",
    //           Security: Security.Recommended
    //         },
    //         {
    //           Name: "TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256",
    //           Security: Security.Insecure
    //         }
    //       ]
    //     }
    //   ]
    // }]);
  }
  setLoading(state: boolean) {
    this.loading.next(state);
  }
}
