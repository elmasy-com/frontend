import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Chain} from "../../models/scan.response";

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChainComponent {
  @Input() chain!: Chain;
  constructor() { }
}
