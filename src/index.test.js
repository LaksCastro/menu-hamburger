import MenuHamburger from './index'

describe('MenuHamburguer', () => {
  it('we must create the menu when the user instantiates a Burger Menu class', () => {
    const Menu = new MenuHamburger(
      document.createElement('section')
    ).getMenuNode()

    expect(Menu).toEqual(
      new MenuHamburger(document.createElement('div')).getMenuNode()
    )
  })
})
