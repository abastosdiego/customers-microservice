import { Client } from "./client.entity";

export class IndividualClient extends Client {
    constructor(
      id: string,
      name: string,
      email: string,
      private cpf: string,
      createdAt?: Date,
      updatedAt?: Date,
    ) {
      super(id, name, email, createdAt, updatedAt);
      this.validateCpf(cpf);
    }
  
    // Getter específico
    getCpf(): string {
      return this.cpf;
    }
  
    // Validação de CPF
    private validateCpf(cpf: string): void {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(cpf)) {
        throw new Error('Invalid CPF');
      }
    }
  }