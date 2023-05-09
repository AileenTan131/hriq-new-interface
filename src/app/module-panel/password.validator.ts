import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('newPassword');
  const confirmPassword = control.get('confirmPassword');
  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  return password && confirmPassword && password.value !== confirmPassword.value ? { 'mismatch': true } : null;
 }
//if password & confimPassword is not blank & yet both !== to each other, we return a mismatch error


