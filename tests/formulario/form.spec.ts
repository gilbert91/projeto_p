import { test, expect } from '@playwright/test';
import { FormPage } from '../../pages/FormPage';
import { generateFormData } from '../../fixtures/form-data';

test.describe('Formulário de Teste', () => {
  let formPage: FormPage;
  let dadosFormulario: ReturnType<typeof generateFormData>;

  test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page);
    dadosFormulario = generateFormData();
    await formPage.goto();
  });

  test('deve preencher formulário com dados aleatórios', async () => {
    // Verifica título da página
    await expect(formPage.title).toHaveText('Automation Testing Practice');

    // Preenche formulário
    await formPage.fillForm(dadosFormulario);

    // Seleciona opções
    await formPage.selectGender('male');
    await formPage.selectDay('saturday');
    await formPage.selectCountry('brazil');
    await formPage.selectColor('green');
    await formPage.selectAnimal('dog');
    await formPage.selectDate('22');

    console.log(`Teste executado com dados:`, dadosFormulario);
  });

  test('deve validar preenchimento de campos obrigatórios', async () => {
    await formPage.fillForm(dadosFormulario);
    
    await expect(formPage.nameInput).toHaveValue(dadosFormulario.nome);
    await expect(formPage.emailInput).toHaveValue(dadosFormulario.email);
  });
});