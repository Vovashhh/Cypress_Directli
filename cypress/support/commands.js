// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('customLogin', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://directly.dzencode.net/api/v2/auth/login',
    body: {
      contactType: 0,
      value: email,
      password: password
    }
  }).then((response) => {
    // Проверьте успешность аутентификации
    expect(response.status).to.equal(201);

    // Сохраните токен в localStorage
    cy.window().then((win) => {
      win.localStorage.setItem('accessToken', response.body.accessToken);
    });

    // Добавьте лог для отслеживания успешной аутентификации
    cy.log('Успешная аутентификация выполнена');

    // Выведите токен в консоль для отладки
    cy.log('Токен в localStorage:', response.body.accessToken);
  });
  cy.visit('/')
});
