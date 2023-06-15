/// reference types="cypress"/>

import commands from "../../support/commands";
import messages from "../../support/messages";
import locators from "../../support/locators";
import "../../support/commandsNavigation";

beforeEach(() => {
  cy.acessarSiteNaturaBrasil();
});

describe("Acessar cadsatro de pessoa", () => {
  it("Acessar tela de cadastro", () => {
    cy.acessarPaginaCadastro();
    cy.xpath(locators.HOME.XP_TITULO_MENU).should(
      "contain",
      messages.TITULO.MENU
    );
  });
  it("Cadastrar nova pessoa", () => {
    cy.acessarPaginaCadastro();
    cy.cadastrarPessoa();
  });
});
