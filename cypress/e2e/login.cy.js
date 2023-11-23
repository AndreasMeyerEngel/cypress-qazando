/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import commom_page from '../support/pages/commom_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commom_page.acessarLogin()
    })
    it('Login com sucesso',  () => {

        const email = faker.internet.email()

        login_page.preencherEmail(email)
        login_page.preencheSenha('12345678')
        login_page.clicarLogin()
        login_page.validarSucesso(email)
    })

    it('Login campo e-mail vazio', () => {

        login_page.preencheSenha('12345678')
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })
    it('Login campo e-mail inválido', () => {

        login_page.preencherEmail('123#')
        login_page.preencheSenha('12345678')
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    
    it('Login campo senha vazio',  () => {

        const email = faker.internet.email()
        
        login_page.preencherEmail(email)
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    
    it('Login campo senha inválido', () => {

        const email = faker.internet.email()

        login_page.preencherEmail(email)
        login_page.preencheSenha('1#')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })



})