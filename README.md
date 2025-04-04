# Customer Management Microservice

This project is a microservice developed in **Node.js** using the **Nest.js** framework. It follows the principles of **Clean Architecture**, ensuring modular, scalable, and maintainable code.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Nest.js**: Framework for building scalable and efficient applications.
- **Docker** and **Docker Compose**: For containerization and development environment management.

## Architecture

The project adopts **Clean Architecture**, which promotes the separation of responsibilities into well-defined layers:

- **Domain Layer**: Contains business rules and main entities.
- **Application Layer**: Contains use cases and application logic.
- **Infrastructure Layer**: Implements details such as database access and external APIs.
- **Interface Layer**: Manages interaction with the user or other systems.

## Prerequisites

Make sure you have installed:

- **Docker** and **Docker Compose**

## How to Set Up the Environment

1. Check in the `docker-compose.yml` file if the `INSTALL_NODE_MODULES` parameter is set to `true`. If there are proxy configuration lines, comment them out.

2. In the terminal, run the following command to start the development environment:
   ```bash
   docker compose up
   ```

## Features

- Customer registration
- Updating customer information
- Deleting customers
- Querying customers

## Folder Structure

The project structure follows the pattern below:

```
src/
|── customer
├──── application/        # Application Layer
│   └──── use-cases/      # Implementation of use cases
├──── domain/             # Domain Layer
│   ├──── entity/         # Definition of entities
│   ├──── error/          # Domain-specific error types
│   └──── repository/     # Repository interfaces
├──── infra/              # Infrastructure Layer
|   ├──── controllers/    # HTTP Controllers
│   └──── repository/     # Repository implementations
└──── customer.module.ts  # Customer module configurations
└── app.module.ts         # Application configurations
└── main.ts               # Main file for application initialization
```