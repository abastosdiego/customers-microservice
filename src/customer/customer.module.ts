import { Module } from "@nestjs/common";
import { CreateCustomerUseCase } from "./application/use-case/create-customer-use-case";
import { DeleteCustomerUseCase } from "./application/use-case/delete-customer-use-case";
import { GetCustomerByIdUseCase } from "./application/use-case/get-customer-by-id-use-case";
import { ListCustomersUseCase } from "./application/use-case/list-customer-use-case";
import { UpdateCustomerUseCase } from "./application/use-case/update-customer-use-case";
import { CustomerController } from "./infra/controller/customer-controller";
import { CustomerMemoryRepository } from "./infra/repository/customer-memory-repository";

@Module({
    controllers: [CustomerController],
    providers: [
        {
            provide: 'CustomerRepository',
            useClass: CustomerMemoryRepository,
        },
        CreateCustomerUseCase,
        UpdateCustomerUseCase,
        ListCustomersUseCase,
        DeleteCustomerUseCase,
        GetCustomerByIdUseCase
    ]
})
export class CustomerModule {}