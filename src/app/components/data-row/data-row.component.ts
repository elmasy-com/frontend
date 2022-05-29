import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataRowComponent {
  @Input() title!: string;

  constructor() { }
}
