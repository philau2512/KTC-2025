create database if not exists sales_management CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
use sales_management;

create table employee (
	id varchar(20) primary key,
    full_name varchar(50),
    mobile varchar(15)
);

create table customer (
	id varchar(20) primary key,
    full_name varchar(50),
    address text,
    mobile varchar(15),
    sales varchar(255)
);

create table product (
	id varchar(20) primary key,
    name varchar(50),
    unit varchar(50),
    origin varchar(50),
    price double
);

create table invoice (
	id int primary key auto_increment,
    invoice_date datetime,
    customer_id VARCHAR(20),
    employee_id VARCHAR(20),
    invoice_total double,
    foreign key (customer_id) references customer(id),
    foreign key (employee_id) references employee(id)
);

create table invoice_detail (
	id int primary key auto_increment,
    invoice_id int, 
    product_id VARCHAR(20),
    amount int,
    foreign key (invoice_id) references invoice(id),
    foreign key (product_id) references product(id)
);