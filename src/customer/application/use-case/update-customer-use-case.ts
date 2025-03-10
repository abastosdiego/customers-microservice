import { Inject, Injectable } from "@nestjs/common";
import { Customer } from "src/customer/domain/entity/customer-entity";
import { IndividualCustomer } from "src/customer/domain/entity/individual-customer.entity";
import { LegalCustomer } from "src/customer/domain/entity/legal-customer.entity";
import { DomainError } from "src/customer/domain/error/domain-error";
import { CustomerMemoryRepository } from "src/customer/infra/repository/customer-memory-repository";

@Injectable()
export class UpdateCustomerUseCase {
  constructor(@Inject('CustomerRepository') private readonly customerRepository: CustomerMemoryRepository) {}

  async execute(id: string, data: { name?: string; email?: string; document?: string }): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);
    if (!customer) {
      throw new DomainError('Customer not found');
    }
    
    if (data.name) customer.updateName(data.name);
    if (data.email) customer.updateEmail(data.email);
    
    if (customer instanceof IndividualCustomer && data.document) {
      customer.updateCPF(data.document);
    }
    if (customer instanceof LegalCustomer && data.document) {
      customer.updateCNPJ(data.document);
    }
    
    await this.customerRepository.save(customer);
    return customer;
  }
}