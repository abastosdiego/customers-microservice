import { Module } from "@nestjs/common";
import { CustomerRepository } from "./infra/repository/customer.repository";
import { CustomerController } from "./infra/controller/customer.controller";
import { CreateCustomerUseCase } from "./application/use-case/create-customer-use-case";
import { UpdateCustomerUseCase } from "./application/use-case/update-customer-use-case";
import { ListCustomersUseCase } from "./application/use-case/list-customer-use-case";
import { DeleteCustomerUseCase } from "./application/use-case/delete-customer-use-case";
import { GetCustomerByIdUseCase } from "./application/use-case/get-customer-by-id-use-case";

@Module({
    controllers: [CustomerController],
    providers: [CustomerRepository, CreateCustomerUseCase, UpdateCustomerUseCase, ListCustomersUseCase, DeleteCustomerUseCase, GetCustomerByIdUseCase]
})
export class CustomerModule {}