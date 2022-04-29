import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ScanComponent} from "./scan/scan.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'scan', component: ScanComponent },
  { path: '**', redirectTo: 'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
