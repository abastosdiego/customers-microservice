import { Module } from "@nestjs/common";
import { ClientController } from "./infra/controller/client.controller";
import { ClientRepository } from "./infra/repository/client.repository";

@Module({
    controllers: [ClientController],
    providers: [ClientRepository]
})
export class ClientModule {}