# Usa a imagem oficial do Node.js com Alpine (versão leve)
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala o bash
RUN apk add --no-cache bash git vim

# Instala o nestjs-cli globalmente
RUN npm install -g @nestjs/cli nodemon uuid

# Instala o types do uuid
RUN npm install --save-dev @types/uuid

# Instala o TypeORM
RUN npm install @nestjs/typeorm typeorm

# Instala a biblioteca de config do nest.js que permite ler o arquivo .env
RUN npm install @nestjs/config

# Install postgres driver
RUN npm install pg

# Expõe a porta da aplicação
EXPOSE 3000

ENTRYPOINT ["sh", "/app/docker-entrypoint.sh"]