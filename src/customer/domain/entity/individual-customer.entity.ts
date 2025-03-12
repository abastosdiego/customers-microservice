import { v4 as uuidv4 } from 'uuid';
import { DomainError } from "../error/domain-error";
import { Customer } from "./customer-entity";

export class IndividualCustomer extends Customer {
    private constructor(
      id: string,
      name: string,
      email: string,
      private cpf: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super(id, name, email, createdAt, updatedAt);
      this.validateCPF(cpf);
    }

    public static create(
      name: string,
      email: string,
      cpf: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      const id = uuidv4();
      return new IndividualCustomer(id, name, email, cpf, createdAt, updatedAt)
    }

    public static populate(
      id: string,
      name: string,
      email: string,
      cpf: string,
      createdAt?: Date,
      updatedAt?: Date) {
      return new IndividualCustomer(id, name, email, cpf, createdAt, updatedAt);
    }
  
    // Getter específico
    getCPF(): string {
      return this.cpf;
    }
  
    // Validação de CPF
    private validateCPF(cpf: string): void {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(cpf)) {
        throw new DomainError('Invalid CPF');
      }
    }

    public updateCPF(cpf: string): void {
      this.validateCPF(cpf);
      this.cpf = cpf;
    }
  }