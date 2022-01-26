create database Tasks;

create table TaskList 
(
	id int not null auto_increment primary key,
    ownerName varchar(50),
    details varchar(100),
	dueDate varchar(20),
    completed varchar(20)
);

select * from tasklist;

insert into TaskList (id, ownerName, details, dueDate, completed) values (0,'owner','details','2022-11-19', 'No');


