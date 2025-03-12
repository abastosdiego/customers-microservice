import { v4 as uuidv4 } from 'uuid';
import { DomainError } from "../error/domain-error";
import { Customer } from "./customer-entity";

export class LegalCustomer extends Customer {
    private constructor(
      id: string,
      name: string,
      email: string,
      private cnpj: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super("", name, email, createdAt, updatedAt);
      this.validateCNPJ(cnpj);
    }

    public static create(
      name: string,
      email: string,
      cnpj: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      const id = uuidv4();
      return new LegalCustomer(id, name, email, cnpj, createdAt, updatedAt)
    }

    public static populate(
      id: string,
      name: string,
      email: string,
      cnpj: string,
      createdAt?: Date,
      updatedAt?: Date) {
      return new LegalCustomer(id, name, email, cnpj, createdAt, updatedAt);
    }
  
    // Getter específico
    getCNPJ(): string {
      return this.cnpj;
    }
  
    // Validação de CNPJ
    private validateCNPJ(cnpj: string): void {
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      if (!cnpjRegex.test(cnpj)) {
        throw new DomainError('Invalid CNPJ');
      }
    }

    updateCNPJ(cnpj: string){
      this.validateCNPJ(cnpj);
      this.cnpj = cnpj;
    }
  }