import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/customer/domain/entity/customer-entity";
import { IndividualCustomer } from "src/customer/domain/entity/individual-customer.entity";
import { LegalCustomer } from "src/customer/domain/entity/legal-customer.entity";
import { CustomerRepository } from "src/customer/domain/repository/customer-repository";
import { Repository } from "typeorm";
import { CustomerTypeORMEntity } from "./typeORM-entity/customer.typeORM.entity";

@Injectable()
export class CustomerTypeORMRepository implements CustomerRepository {

    constructor(
        @InjectRepository(CustomerTypeORMEntity)
        private readonly customerRepository: Repository<CustomerTypeORMEntity>
    ) {}

    async save(customer: Customer): Promise<void> {
        const customerData = this.domainEntityToTypeORMEntity(customer);
        await this.customerRepository.save(customerData);
    }

    async list(): Promise<Customer[]> {
        const customers = (await this.customerRepository.find()).map((customerData) => {
            return this.typeORMEntityToDomainEntity(customerData);
        });
        return customers;
    }
    
    async findById(id: string): Promise<Customer | null> {
        const customerData = await this.customerRepository.findOneBy({id: id});
        if (!customerData) {
            throw new Error('Não encontrado!');
        }
        return this.typeORMEntityToDomainEntity(customerData);
    }
    
    async delete(id: string): Promise<void> {
        await this.customerRepository.delete(id);
    }

    private typeORMEntityToDomainEntity(customerData: CustomerTypeORMEntity): Customer {
        if (customerData.type === 'IC') {
            return IndividualCustomer.populate(
                customerData.id,
                customerData.name,
                customerData.email,
                customerData.cpf,
                new Date(),
                new Date()
            );
        } else {
            return LegalCustomer.populate(
                customerData.id,
                customerData.name,
                customerData.email,
                customerData.cnpj,
                new Date(),
                new Date()
            );
        }
    }

    private domainEntityToTypeORMEntity(customer: Customer): any {
        const customerData = {
            id: customer.getId(),
            name: customer.getName(),
            email: customer.getEmail(),
            type: customer instanceof IndividualCustomer ? 'IC' : 'LC',
            cpf: customer instanceof IndividualCustomer ? customer.getCPF() : undefined,
            cnpj: customer instanceof LegalCustomer ? customer.getCNPJ() : undefined
        };
        return customerData;
    }
}