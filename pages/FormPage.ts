import { Page, Locator } from '@playwright/test';

export class FormPage {
  readonly page: Page;
  readonly title: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly maleRadio: Locator;
  readonly saturdayCheckbox: Locator;
  readonly countrySelect: Locator;
  readonly datepicker: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1.title');
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.addressInput = page.locator('#textarea');
    this.maleRadio = page.locator('#male');
    this.saturdayCheckbox = page.locator('#saturday');
    this.countrySelect = page.locator('#country');
    this.datepicker = page.locator('#datepicker');
  }

  async goto() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async fillForm(data: {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
  }) {
    await this.nameInput.fill(data.nome);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.telefone);
    await this.addressInput.fill(data.endereco);
  }

  async selectGender(gender: 'male' | 'female') {
    await this.page.check(`#${gender}`);
  }

  async selectDay(day: string) {
    await this.page.check(`#${day}`);
  }

  async selectCountry(country: string) {
    await this.countrySelect.selectOption(country);
  }

  async selectColor(color: string) {
    await this.page.click(`option[value="${color}"]`);
  }

  async selectAnimal(animal: string) {
    await this.page.click(`option[value="${animal}"]`);
  }

  async selectDate(day: string) {
    await this.datepicker.click();
    await this.page.click(`a[data-date="${day}"]`);
  }
}