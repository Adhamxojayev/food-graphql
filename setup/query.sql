
select 
	case
		when o.table_id is not null and o.order_paid = true then false
		when o.table_id is null then false
		else true
	end as table_busy
from orders o
right join tables t on t.table_id = o.table_id
where t.table_id = 2
order by o.order_created_at desc
limit 1


select
	distinct on(t.table_id)
	t.table_id,
	t.table_number,
	case
		when o.order_paid = true then false
		else true
	end as table_busy
from tables t
inner join (
	select
		*
	from orders
	order by order_created_at desc
) as o on o.table_id = t.table_id
order by t.table_id;



	-- select 
	-- 	o.order_id,
	-- 	t.table_id,
	-- 	case
	-- 		when o.table_id is not null and o.order_paid = true then false
	-- 		when o.table_id is null then false
	-- 		else true
	-- 	end as table_busy
	-- from orders o
	-- left join tables t on t.table_id = o.table_id
	-- order by o.order_created_at desc