import { AbstractControl } from '@angular/forms';

export const Matcher = (ipt1) => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    const input1 = control.parent && control.parent.get(ipt1);
    const input2 = control;
    if (!input1 || !input2 || !input1.value || !input2.value) {
      return null;
    }
    if (input1.value === input2.value) {
      let input1Error = input1.errors;
      if (input1Error === null) {
        return null;
      }
      let i = 0;
      for (const key of Object.keys(input1Error)) {
        i++;
        if (key === 'nomatch') {
          delete input1Error.nomatch;
          i--;
        }
      }
      if (i === 0) {
        input1Error = null;
      }
      input1.setErrors(input1Error);
      return null;
    } else {
      return {nomatch: true};
    }
  };
};
