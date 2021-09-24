create database master_food;

create table steaks (
	steak_id int generated always as identity primary key,
	steak_name varchar(50) not null,
	steak_img varchar(256) not null,
	steak_price int not null
);

create table tables (
	table_id int generated always as identity primary key,
	table_number smallint not null
);

create table orders (
	order_id int generated always as identity primary key,
	table_id int not null references tables (table_id) on delete cascade,
	order_paid bool default false,
	order_created_at timestamptz default current_timestamp
);

create table order_sets (
	order_set_id int generated always as identity primary key,
	count smallint not null,
	steak_id int not null references steaks(steak_id) on delete cascade,
	order_id int not null references orders(order_id) on delete cascade,
	order_set_price int not null
);







