export abstract class Client {
    constructor(
      protected readonly id: string,
      protected name: string,
      protected email: string,
      protected createdAt: Date = new Date(),
      protected updatedAt: Date = new Date(),
    ) {
      this.validateName(name);
      this.validateEmail(email);
    }
  
    // Getters
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getCreatedAt(): Date {
      return this.createdAt;
    }
  
    getUpdatedAt(): Date {
      return this.updatedAt;
    }
  
    // Setters com validações
    updateName(name: string): void {
      this.validateName(name);
      this.name = name;
      this.updatedAt = new Date();
    }
  
    updateEmail(email: string): void {
      this.validateEmail(email);
      this.email = email;
      this.updatedAt = new Date();
    }
  
    // Validações
    private validateName(name: string): void {
      if (!name || name.trim().length === 0) {
        throw new Error('Name cannot be empty');
      }
    }
  
    private validateEmail(email: string): void {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email');
      }
    }
  }