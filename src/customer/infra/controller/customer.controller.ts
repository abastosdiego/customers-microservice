import { Body, Controller, Get, Post } from "@nestjs/common";
import { CustomerRepository } from "../repository/customer.repository";
import { CreateCustomerUseCase } from "src/customer/application/use-case/create-customer-use-case";

@Controller('/customers')
export class CustomerController {

    constructor(private customerRepository: CustomerRepository, private createCustomerUseCase: CreateCustomerUseCase) {}

    @Post()
    async create(@Body() customerData: any) {
        await this.createCustomerUseCase.execute(customerData);
        return customerData;
    }

    @Get()
    async listUsuarios() {
        return this.customerRepository.list();
    }

}