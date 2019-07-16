import { AuthService } from './auth.service';
describe('Auth service tests', () => {
    let authService: AuthService = new AuthService();
    beforeEach(() => {
        authService = new AuthService();
    })
    it('default value isAccessAllowes should be false', () =>
        expect(authService.isAccessAllowd).toBe(false));

    it('Method isUserAuthenticated should return isAccessAllowed', () => {
        expect(authService.isUserAuthenticated()).toBe(authService.isAccessAllowd)
    });


    it('Method allowAcces should change isAccessAllowed to true', () => {
        authService.allowAccess();
        expect(authService.isAccessAllowd).toBe(true)
    })

})