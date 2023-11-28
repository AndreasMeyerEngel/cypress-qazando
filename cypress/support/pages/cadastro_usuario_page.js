/// <reference types="cypress"  />

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemErro(message) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', `${message}`)
    },

    preencheNome(name) {
        cy.get('#user')
            .type(name) 
    },

    preencheEmail(email) {
        cy.get('#email')
            .type(email) 
    },

    preencheSenha(passworde) {
        cy.get('#password')
            .type(password)
    },

    validarMensagemSucesso(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}