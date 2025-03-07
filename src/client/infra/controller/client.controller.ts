import { Body, Controller, Get, Post } from "@nestjs/common";
import { ClientRepository } from "../repository/client.repository";

@Controller('/clients')
export class ClientController {

    constructor(private clientRepository: ClientRepository) {}

    @Post()
    async create(@Body() clientData: any) {
        this.clientRepository.create(clientData);
        return clientData;
    }

    @Get()
    async listUsuarios() {
        return this.clientRepository.list();
    }

}