/// reference types="cypress"/>

import commands from "../../support/commands";
import messages from "../../support/messages";

beforeEach(() => {
  cy.acessarSiteAesopBrasil();
});

//validação do acesso ao site aesop brasil
it("Validar site aesop", () => {
  cy.title().should("be.equal", messages.TITULO.HOME);
});
