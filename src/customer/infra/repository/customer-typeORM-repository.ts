import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/customer/domain/entity/customer-entity";
import { IndividualCustomer } from "src/customer/domain/entity/individual-customer.entity";
import { CustomerRepository } from "src/customer/domain/repository/customer-repository";
import { Repository } from "typeorm";
import { CustomerTypeORMEntity } from "./typeORM-entity/customer.typeORM.entity";

@Injectable()
export class CustomerTypeORMRepository implements CustomerRepository {
    private customers: Customer[] = [];
    
    constructor(
        @InjectRepository(CustomerTypeORMEntity)
        private readonly customerRepository: Repository<CustomerTypeORMEntity>
    ) {}

    async save(customer: Customer): Promise<void> {
        const index = this.customers.findIndex(c => c.getId() === customer.getId());
        if (index !== -1) {
            this.customers[index] = customer;
        } else {
            this.customers.push(customer);
        }
    }

    async list(): Promise<Customer[]> {
        //return this.customers;
        const customers = (await this.customerRepository.find()).map(
           (u) => new IndividualCustomer(u.name,u.email,"000.000.000-00",new Date(),new Date())
        );
        return customers;
    }
    
    async findById(id: string): Promise<Customer | null> {
        return this.customers.find(customer => customer.getId() === id) || null;
    }
    
    async delete(id: string): Promise<void> {
        this.customers = this.customers.filter(customer => customer.getId() !== id);
    }
}