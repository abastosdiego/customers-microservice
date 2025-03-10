import { Inject, Injectable } from "@nestjs/common";
import { DomainError } from "src/customer/domain/error/domain-error";
import { CustomerMemoryRepository } from "src/customer/infra/repository/customer-memory-repository";

@Injectable()
export class GetCustomerByIdUseCase {
    constructor(@Inject('CustomerRepository') private customerRepository: CustomerMemoryRepository) {}

    async execute(id: string) {
        const customer = await this.customerRepository.findById(id);
        if (!customer) {
            throw new DomainError(`Customer with id ${id} not found`);
        }
        return customer;
    }
}
