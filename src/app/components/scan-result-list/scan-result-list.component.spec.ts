import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanResultListComponent } from './scan-result-list.component';

describe('ScanResultListComponent', () => {
  let component: ScanResultListComponent;
  let fixture: ComponentFixture<ScanResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
