import { Injectable } from "@nestjs/common";
import { Customer } from "src/customer/domain/entity/customer.entity";

@Injectable()
export class CustomerRepository {
    private customers: Customer[] = [];
    
    async save(customer: Customer): Promise<void> {
        const index = this.customers.findIndex(c => c.getId() === customer.getId());
        if (index !== -1) {
            this.customers[index] = customer;
        } else {
            this.customers.push(customer);
        }
    }

    async list(): Promise<Customer[]> {
        return this.customers;
    }
    
    async findById(id: string): Promise<Customer | null> {
        return this.customers.find(customer => customer.getId() === id) || null;
    }
    
    async delete(id: string): Promise<void> {
        this.customers = this.customers.filter(customer => customer.getId() !== id);
    }
}