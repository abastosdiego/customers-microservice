import { Client } from "./client.entity";

export class LegalClient extends Client {
    constructor(
      id: string,
      name: string,
      email: string,
      private cnpj: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super(id, name, email, createdAt, updatedAt);
      this.validateCnpj(cnpj);
    }
  
    // Getter específico
    getCnpj(): string {
      return this.cnpj;
    }
  
    // Validação de CNPJ
    private validateCnpj(cnpj: string): void {
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      if (!cnpjRegex.test(cnpj)) {
        throw new Error('Invalid CNPJ');
      }
    }
  }