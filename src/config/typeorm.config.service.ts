import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: "postgres",
            host: 'customers-postgres',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'customers',
            entities: [],
            synchronize: true
        }
    }
}