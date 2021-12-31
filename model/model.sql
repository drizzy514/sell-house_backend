CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name varchar(32) not null,
    user_email varchar(32) not null,
    user_password text not null,
    user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE developers(
    developer_id serial PRIMARY KEY,
    developer_title varchar(32),
    developer_site varchar(32),
    developer_img text,
    developer_email varchar(32)
);

CREATE TABLE complexs (
    complex_id serial PRIMARY KEY,
    complex_title varchar(32),
    complex_img text,
    complex_developer int REFERENCES developers(developer_id)
);

CREATE TABLE houses (
    house_id serial PRIMARY KEY,
    house_room int not null,
    house_price int not null,
    house_img text,
    house_complex int REFERENCES complexs(complex_id)
);


CREATE TABLE banks (
    bank_id serial PRIMARY KEY,
    bank_name varchar(32),
    bank_info text,
    bank_max int,
    bank_img text
); 

-- CREATE OR REPLACE FUNCTION archived_func() 
-- RETURNS TRIGGER 
-- LANGUAGE plpgsql 
-- AS 
-- $$ 
-- BEGIN
--     INSERT INTO
--         archived_queues (archived_queue_user, archived_queue_clinic)
--     VALUES
--         (OLD.queue_user, OLD.queue_clinic);

-- RETURN OLD;

-- END 
-- $$;