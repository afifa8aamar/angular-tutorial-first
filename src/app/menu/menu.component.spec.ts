import { MenuComponent } from "./menu.component";

describe('MenuComponent testing', () => {

    let menuComponent;
    beforeEach(() => {
        menuComponent = new MenuComponent();
    })


    it('Default value for isOpen should be false', () => {
        expect(menuComponent.isOpen).toBe(false);
    })

    it('Method showMenu should change isOpen to true', () => {
        menuComponent.showMenu();
        expect(menuComponent.isOpen).toBe(true);
    })

    it('Method hideMenu should change isOpen to false', () => {
        menuComponent.hideMenu();
        expect(menuComponent.isOpen).toBe(false);
    })

})