import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ScanResultListComponent } from './components/scan-result-list/scan-result-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import { DataRowComponent } from './components/data-row/data-row.component';
import { CertComponent } from './components/cert/cert.component';
import { ChainComponent } from './components/chain/chain.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    LoadingSpinnerComponent,
    ScanResultListComponent,
    DataRowComponent,
    CertComponent,
    ChainComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
