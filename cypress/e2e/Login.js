/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.get('header div.container button:nth-child(4)').click()
    cy.contains('Login').click()
  })
})
