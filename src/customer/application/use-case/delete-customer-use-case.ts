import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerRepository } from "src/customer/infra/repository/customer.repository";

@Injectable()
export class DeleteCustomerUseCase {
    constructor(private customerRepository: CustomerRepository) {}

    async execute(id: string) {
        const customer = await this.customerRepository.findById(id);
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        await this.customerRepository.delete(id);
        return { message: `Customer with id ${id} deleted successfully` };
    }
}
