/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    
    cy.customLogin('crm.28540@gmail.com', 'Qwerty123/');

  })

  it('passes', () => {
    cy.get('header div.container button:nth-child(4)').click()
    cy.contains('Login').click()
  })
})
