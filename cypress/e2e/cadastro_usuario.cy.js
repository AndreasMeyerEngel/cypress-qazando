/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import commom_page from '../support/pages/commom_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commom_page.acessarCadastroUsuario()
    })

    it('Campo Nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo E-mail vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo E-mail Inválido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail('emailinvalido@.')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo Senha Vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo Senha Inválida', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('12.')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com Sucesso', () => {

        const email = faker.internet.email()
        const name = faker.person.fullName()

        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha('1234567')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)
    })
})
