import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "src/customer/infra/repository/customer.repository";

@Injectable()
export class ListCustomersUseCase {
    constructor(private customerRepository: CustomerRepository) {}

    async execute() {
        return this.customerRepository.list();
    }
}
