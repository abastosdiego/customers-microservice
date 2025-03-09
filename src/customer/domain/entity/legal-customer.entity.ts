import { Customer } from "./customer.entity";

export class LegalCustomer extends Customer {
    constructor(
      name: string,
      email: string,
      private cnpj: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super(name, email, createdAt, updatedAt);
      this.validateCNPJ(cnpj);
    }
  
    // Getter específico
    getCNPJ(): string {
      return this.cnpj;
    }
  
    // Validação de CNPJ
    private validateCNPJ(cnpj: string): void {
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      if (!cnpjRegex.test(cnpj)) {
        throw new Error('Invalid CNPJ');
      }
    }

    updateCNPJ(cnpj: string){
      this.validateCNPJ(cnpj);
      this.cnpj = cnpj;
    }
  }