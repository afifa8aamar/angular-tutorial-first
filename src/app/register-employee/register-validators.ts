import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegisterValidators {
    static Required(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string) == "")
            return { Required: { message: "This Field is required" } }
        return null;
    }

    static InvalidSalary(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[0-9]+$/i;
        if (((control.value as string) !== "") && (!pattern.test(control.value)))
            return { InvalidSalary: { message: "Salary should be a number" } }
        return null;
    }

    static InvalidAge(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[0-9]+$/i;
        if (((control.value as string) !== "") && (!pattern.test(control.value)))
            return { InvalidAge: { message: "Age should be a number" } }
        return null;
    }

    static InValidInputs(control: AbstractControl) {
        const name = control.get('name').valid;
        const salary = control.get('salary').valid;
        const age = control.get('age').valid;
        if (name && salary && age)
            return null
        return { InValidInputs: true }
    }

}