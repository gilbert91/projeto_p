import { faker } from '@faker-js/faker';

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

export function generateFormData(): FormData {
  const shortEmail = `${faker.string.alpha(5)}@t.co`;
  
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const shortName = `${firstName} ${lastName}`.substring(0, 15);
  
  return {
    nome: shortName,
    email: shortEmail,
    telefone: faker.phone.number(),
    endereco: faker.location.secondaryAddress(),
  };
}