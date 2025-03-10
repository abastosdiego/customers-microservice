import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCustomerUseCase } from "src/customer/application/use-case/create-customer-use-case";
import { UpdateCustomerUseCase } from "src/customer/application/use-case/update-customer-use-case";
import { ListCustomersUseCase } from "src/customer/application/use-case/list-customer-use-case";
import { GetCustomerByIdUseCase } from "src/customer/application/use-case/get-customer-by-id-use-case";
import { DeleteCustomerUseCase } from "src/customer/application/use-case/delete-customer-use-case";

@Controller('/customers')
export class CustomerController {

    constructor(private createCustomerUseCase: CreateCustomerUseCase,
                private updateCustomerUseCase: UpdateCustomerUseCase,
                private deleteCustomerUseCase: DeleteCustomerUseCase,
                private listCustomersUseCase: ListCustomersUseCase,
                private getCustomerByIdUseCase: GetCustomerByIdUseCase) {}

    @Get()
    async list() {
        return this.listCustomersUseCase.execute();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.getCustomerByIdUseCase.execute(id);
    }

    @Post()
    async create(@Body() customerData: any) {
        return await this.createCustomerUseCase.execute(customerData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() customerData: any) {
        return await this.updateCustomerUseCase.execute(id, customerData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.deleteCustomerUseCase.execute(id);
    }
}