import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientRepository {
    private clients: any[] = [];

    async create(client: any) {
        this.clients.push(client);
    }

    async list() {
        return this.clients;
    }
}