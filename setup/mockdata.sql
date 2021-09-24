

insert into steaks (steak_name, steak_price, steak_img) values
('combo 1', 27000, 'https://picsum.photos/400'),
('lavash', 21000, 'https://picsum.photos/400'),
('haggi', 23000, 'https://picsum.photos/400'),
('Razliv', 6000, 'https://picsum.photos/400'),
('Cola 1', 8000, 'https://picsum.photos/400');

insert into tables (table_number) values (1);
insert into tables (table_number) values (2);
insert into tables (table_number) values (3);
insert into tables (table_number) values (4);


insert into orders (table_id) values (1);
insert into orders (table_id) values (3);

insert into order_sets (steak_id, order_id, count, order_set_price) values (2, 1, 2, 21000);
insert into order_sets (steak_id, order_id, count, order_set_price) values (3, 1, 1, 23000);

insert into order_sets (steak_id, order_id, count, order_set_price) values (1, 2, 1, 27000);
insert into order_sets (steak_id, order_id, count, order_set_price) values (5, 2, 1, 8000);