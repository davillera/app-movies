import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchValuesValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const controlValue = control.get(controlName)?.value;
    const matchingControlValue = control.get(matchingControlName)?.value;

    if (controlValue !== matchingControlValue) {
      return { 'matchValues': true };
    } else {
      return null;
    }
  };
}
