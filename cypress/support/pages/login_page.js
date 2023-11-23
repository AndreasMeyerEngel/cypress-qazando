/// <reference types="cypress"  />

export default {
    clicarLogin() {
        cy.get('#btnLogin')
            .click()
    },

    preencherEmail(email) {
        cy.get('#user')
            .type(email) 
    },

    preencheSenha(password) {
        cy.get('#password')
            .type(password)
    },

    validarSucesso(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    },

    validarMensagemErro(message) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', `${message}`)
    }


}