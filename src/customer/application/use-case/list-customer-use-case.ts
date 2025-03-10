import { Inject, Injectable } from "@nestjs/common";
import { CustomerMemoryRepository } from "src/customer/infra/repository/customer-memory-repository";

@Injectable()
export class ListCustomersUseCase {
    constructor(@Inject('CustomerRepository') private customerRepository: CustomerMemoryRepository) {}

    async execute() {
        return this.customerRepository.list();
    }
}
