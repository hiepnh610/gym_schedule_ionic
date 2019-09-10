import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'destroy-component',
  encapsulation: ViewEncapsulation.None,
  template: ''
})
export class DestroyComponent implements OnDestroy {
  public unsubscribeAll: Subject<any> = new Subject();

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
