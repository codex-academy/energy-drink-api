create table energy_drink (
	id serial not null primary key,
	drink_name text not null
);

create table week_day (
	id serial not null primary key,
	day_name text not null
);

-- why this table
-- join the energy_drink & week_day tables
create table drinked (
    id serial not null primary key,
    energy_drink_id int not null,
    week_day_id int not null
);



-- create table categories(
-- 	id serial  not null primary key,
-- 	description text not null
-- );

-- create table products (
-- 	id serial not null primary key,
--     description text not null,
-- 	price decimal(10,2),
-- 	category_id int,
-- 	foreign key (category_id) references categories(id)
-- );