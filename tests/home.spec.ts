import { test, expect } from '@playwright/test';
// 1. Importar o Faker
import { faker } from '@faker-js/faker';

const dadosFormulario = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  endereco: faker.location.secondaryAddress(),
};

test('acessando e preechendo form testautomationpractice blogspot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2. Gerar o nome aleatório
  const nomeAleatorio = faker.person.fullName();

  // 3. Implementação do Faker no campo '#name'
  await page.fill('#name', dadosFormulario.nome); // 🌟 CORREÇÃO AQUI 🌟

  // Mantidos os demais campos estáticos (conforme solicitado)
  await page.fill('#email', 'email Completo');
  await page.fill('#phone', faker.internet.email());
  await page.fill('#textarea', faker.location.secondaryAddress());
  await page.check('#male');
  await page.check('#saturday');
  await page.selectOption('#country', 'brazil');
  await page.click('option[value="green"]');
  await page.click('option[value="dog"]');
  await page.click('#datepicker');
  await page.click('a[data-date="22"]');

  console.log(`Teste executado com Nome Aleatório: ${nomeAleatorio}`);
});

// Os testes comentados foram mantidos
// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
// 
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
// 
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });