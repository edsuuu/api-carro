#criar uma schemas(database)

create database dbApiCarros;

#usar a schema(db)
use dbApiCarros;

#criar a tabela no db 

create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

#Inserir dados a tabela 

insert into carros (modelo, placa) values  ('Toyota Corolla','EMO4929');
insert into carros (modelo, placa) values  ('Honda Civic','ELV1590');

#Selecionar toda a tabela 

SELECT * FROM dbapicarros.carros;

#alterar o usuario caso der o erro code: 'ER_NOT_SUPPORTED_AUTH_MODE',

alter user 'root'@'localhost' identified with mysql_native_password by 'root';