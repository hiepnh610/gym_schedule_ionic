import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '../destroy/destroy.component';
import { takeUntil } from 'rxjs/operators';

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

  public showFormError() {
    let errorMessage = '';
    if (!this.frm) {
      return errorMessage;
    }

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        const control = this.frm.get(field);
        if (control) {
          control.markAsTouched({ onlySelf: true });
        }
        if (control && !control.valid) {
          if (control.controls) {
            for (const fieldChild in control.controls) {
              if (this.formErrors[field].hasOwnProperty(fieldChild)) {
                const controlChild = this.frm.controls[field].get(fieldChild);
                if (controlChild) {
                  controlChild.markAsTouched({ onlySelf: true });
                }
                if (controlChild && !controlChild.valid) {
                  for (const keyChild in controlChild.errors) {
                    if (controlChild.errors.hasOwnProperty(keyChild)) {
                      const messages = this.validationMessages[field][fieldChild][keyChild];
                      this.formErrors[field][fieldChild] = messages + ' ';
                      errorMessage += messages.length ? ('- ' + messages + '<br/>') : '';
                      break;
                    }
                  }
                }
              }
            }
            continue;
          }
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              const messages = this.validationMessages[field][key];
              if (messages) {
                this.formErrors[field] = messages + ' ';
                errorMessage += messages.length ? ('- ' + messages + '<br/>') : '';
              }
              break;
            }
          }
        }
      }
    }

    return errorMessage;
  }
}
