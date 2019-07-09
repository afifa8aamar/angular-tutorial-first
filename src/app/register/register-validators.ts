import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegisterValidators {
    static Required(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string) == "")
            return { Required: { message: "This Field is required" } }
        return null;
    }

    static InvalidEmail(control: AbstractControl) {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { InvalidEmail: { message: "Please provide a valid email" } };
        }
        return null;
    }

    static InvalidPassword(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[A-Za-z0-9]+$/i;
        if ((control.value != "") && (control.value as string).length < 7) {
            return { InvalidPassword: { message: "Password should be more than " + 7 + " characters" } }
        } else if (((control.value as string) !== "") && (!pattern.test(control.value)))
            return { InvalidPassword: { message: "Password must contain only english charachters or numbers" } }
        return null;
    }

    static UncheckedAgreement(control: AbstractControl) {
        if (control.value as boolean === false)
            return { UncheckedAgreement: { message: "Please read and aprove the agreement" } }
        return null;
    }

    static InvalidNickname(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[A-Za-z0-9\-]+$/i;
        if (((control.value as string) !== "") && (!pattern.test(control.value)))
            return { InvalidNickname: { message: "nickname must contain only english charachters, numbers or -" } }
        return null;
    }

    static InvalidPhone(control: AbstractControl): ValidationErrors | null {
        const pattern = /^[0-9\+]+$/i;
        if (((control.value as string) !== "") && (control.value as string).indexOf('+380') === -1)
            return { InvalidPhone: { message: "phone number must start +380" } }
        else if (((control.value as string) !== "") && (control.value as string).length != 13)
            return { InvalidPhone: { message: "Provide a valid phone number" } }
        else if (((control.value as string) !== "") && (!pattern.test(control.value)))
            return { InvalidPhone: { message: "Provide a valid phone number" } }
        return null;
    }

    static InvalidWebsite(control: AbstractControl) {
        const pattern = /^(https:)+\/\/+[a-z0-9\/\.]([a-z0-9-\/\.]*[a-z0-9\/\.])*$/i;

        if (control.value != "" && !pattern.test(control.value)) {
            return { InvalidWebsite: { message: "Please provide a valid website" } };
        }
        return null;
    }

}