import { Inject, Injectable } from "@nestjs/common";
import { Customer } from "src/customer/domain/entity/customer-entity";
import { IndividualCustomer } from "src/customer/domain/entity/individual-customer.entity";
import { LegalCustomer } from "src/customer/domain/entity/legal-customer.entity";
import { CustomerRepository } from "src/customer/domain/repository/customer-repository";

@Injectable()
export class CreateCustomerUseCase {
  constructor(@Inject('CustomerRepository') private readonly customerRepository: CustomerRepository) {}

  async execute(data: { type: 'IC' | 'LC'; name: string; email: string; document: string }): Promise<Customer> {
    let customer: Customer;
    
    if (data.type === 'IC') {
      customer = new IndividualCustomer(data.name, data.email, data.document);
    } else {
      customer = new LegalCustomer(data.name, data.email, data.document);
    }
    await this.customerRepository.save(customer);
    return customer;
  }
}