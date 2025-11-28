## Documentação para a inicialização do projeto sem erros:

1- copie e cole ```git clone https://github.com/matheussantosspbr/comhub_backend.git```

2- ```cd comhub_backend```

3- ```npm i```

4- ```docker run --name mysql-database -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=development -d -p 3306:3306 mysql:8.0```

5- ```npx prisma generate```

6- ```npx prisma migrate dev create_url_table initial```

7- ```npm run test``` para ver se deu tudo certo, aperte ```q``` para sair

8- ```npm run build```

9- e por fim ```npm start```

E pronto, o projeto ja está funcionando da forma certa
