create database rdseguros;

use rdseguros;


create table loginadm(
nome varchar(200) not null unique,
senha varchar(80) not null
);

create table clientes(
id_cliente int auto_increment primary key,
nome varchar (200), 
telefone varchar (9) not null unique, 
endereco varchar(255), 
carro varchar(100), 
placa varchar(7) not null unique, 
descricao varchar(255) 
);

create table pedidos (
id_pedido int auto_increment primary key, 
id_cliente int, 
carro varchar(200),
placa varchar (7), 
descricao varchar (200),
entregue boolean, 
preco decimal (10,2),
pago boolean,
foreign key (id_cliente) references clientes (id_cliente)
);


create table agendamento (
id_agendamento int auto_increment primary key, 
data_hora datetime not null unique, 
descricao varchar(200), 
id_cliente int, 
foreign key(id_cliente) references clientes (id_cliente)
);

create table orcamento (
id_orcamento int auto_increment primary key,
id_cliente int, 
foreign key (id_cliente) references clientes (id_cliente), 
carro varchar(100), 
placa varchar(7), 
enderco varchar(200),
telefone varchar(9) not null unique, 
descricao varchar(200),
pecas varchar(200),
valor decimal (10,2)
);