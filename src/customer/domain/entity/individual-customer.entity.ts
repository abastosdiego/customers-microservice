import { DomainError } from "../error/domain-error";
import { Customer } from "./customer.entity";

export class IndividualCustomer extends Customer {
    constructor(
      name: string,
      email: string,
      private cpf: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super(name, email, createdAt, updatedAt);
      this.validateCPF(cpf);
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