import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateCustomerUseCase } from "./application/use-case/create-customer-use-case";
import { DeleteCustomerUseCase } from "./application/use-case/delete-customer-use-case";
import { GetCustomerByIdUseCase } from "./application/use-case/get-customer-by-id-use-case";
import { ListCustomersUseCase } from "./application/use-case/list-customer-use-case";
import { UpdateCustomerUseCase } from "./application/use-case/update-customer-use-case";
import { CustomerController } from "./infra/controller/customer-controller";
import { CustomerTypeORMRepository } from "./infra/repository/customer-typeORM-repository";
import { CustomerTypeORMEntity } from "./infra/repository/typeORM-entity/customer.typeORM.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CustomerTypeORMEntity])],
    controllers: [CustomerController],
    providers: [
        {
            provide: 'CustomerRepository',
            useClass: CustomerTypeORMRepository,
        },
        CreateCustomerUseCase,
        UpdateCustomerUseCase,
        ListCustomersUseCase,
        DeleteCustomerUseCase,
        GetCustomerByIdUseCase
    ]
})
export class CustomerModule {}