import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '../destroy/destroy.component';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'base-component',
  encapsulation: ViewEncapsulation.None,
  template: ''
})
export class BaseComponent extends DestroyComponent implements OnInit {
  public frm: any;
  public formErrors: any;
  public validationMessages: any;
  public controlConfig: any;

  public ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.frm = new FormGroup(this.controlConfig);

    this.frm.valueChanges
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((data: any) => this.onValueChanged(data));

    this.onValueChanged();
  }

  public onValueChanged(data?: any) {
    if (!this.frm) { return; }

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        const control = this.frm.get(field);
        if (control && !control.valid) {
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] = this.validationMessages[field][key] + ' ';
              break;
            }
          }
        }
      }
    }
  }
}
