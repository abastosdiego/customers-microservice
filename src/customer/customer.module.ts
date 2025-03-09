import { Module } from "@nestjs/common";
import { CustomerRepository } from "./infra/repository/customer.repository";
import { CustomerController } from "./infra/controller/customer.controller";
import { CreateCustomerUseCase } from "./application/use-case/create-customer-use-case";

@Module({
    controllers: [CustomerController],
    providers: [CustomerRepository, CreateCustomerUseCase]
})
export class CustomerModule {}