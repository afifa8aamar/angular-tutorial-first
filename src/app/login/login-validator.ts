import { AbstractControl } from '@angular/forms';

export class LoginValidator {
    static InvalidPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '123')
                resolve({ InvalidPassword: { message: 'Invalid Password' } })
            else
                resolve(null)
        })
    }

    static InvalidNickname(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ InvalidNickname: { message: 'Invalid Nickname' } })
            else
                resolve(null)
        })
    }

    static InvalidNicknameOrPassword(control: AbstractControl) {
        const nickname = control.get('nickname') ;
        const password = control.get('password') ;
    }
} 