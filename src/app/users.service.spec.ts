import { UserService } from './users.service';

describe('Auth service tests', () => {
    let userService;
    beforeEach(() => {
        userService = new UserService();
    })

    it('Default users should be empty', () => {
        expect(userService.users).toEqual([]);
    })

    it('Method addUser should add to users', () => {
        let user = {
            email: 'afifa@gmail.com',
            passwords: {
                password: '1234567',
                confirm: '1234567'
            },
            nickname: 'afifa',
            phone: '+380123654789',
            website: 'https://www.youtube.com/',
            agreement: true
        }
        userService.addUser(user);
        expect(userService.users).toEqual([user])
    })

    it('Method getUsers should return users', () => {
        expect(userService.getUsers()).toEqual(userService.users);
    })

    it('Method RemoveUser should remove user from users', () => {
        let user = {
            email: 'afifa@gmail.com',
            passwords: {
                password: '1234567',
                confirm: '1234567'
            },
            nickname: 'afifa',
            phone: '+380123654789',
            website: 'https://www.youtube.com/',
            agreement: true
        }
        userService.addUser(user);
        userService.RemoveUser(user);
        expect(userService.getUsers()).toEqual([]);
    })

})