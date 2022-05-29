import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cert} from "../../models/scan.response";

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertComponent {
  @Input() cert!: Cert;
  constructor() { }
}
