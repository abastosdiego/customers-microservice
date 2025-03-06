# Ambiente Node.js com Nest.js configurado usando docker-compose.

Necessário docker e docker compose instalados para rodar o ambiente de desenvolvimento. 

01 - Verificar no docker-compose.yml se o parâmetro INSTALL_NODE_MODULES está true e comentar as linhas de configuração de proxy (caso existam).

Obs: Caso queira criar um novo projeto Nest.js, copie os arquivos Dockerfile, docker-compose.yml e docker-entrypoint.sh para uma pasta vazia e defina os parâmetros CREATE_NEW_PROJECT_NESTJS e INSTALL_NODE_MODULES do docker-compose.ym para true.

02 - No terminal, rodar o seguinte comando para subir o ambiente:
```php
docker compose up
```