import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerRepository } from "src/customer/infra/repository/customer.repository";

@Injectable()
export class GetCustomerByIdUseCase {
    constructor(private customerRepository: CustomerRepository) {}

    async execute(id: string) {
        const customer = await this.customerRepository.findById(id);
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return customer;
    }
}
