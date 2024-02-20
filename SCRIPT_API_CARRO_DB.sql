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