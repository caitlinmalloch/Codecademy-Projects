-- Select first 10 rows from store table
SELECT * 
FROM store
LIMIT 10;

-- Calculate distinct values
SELECT COUNT(DISTINCT(order_id))
FROM store;

SELECT COUNT(DISTINCT(customer_id))
FROM store;

-- Inspect repeated data
SELECT customer_id, cutomer_email, customer_phone
FROM store
WHERE customer_id = 1;

-- Return repeated data where item_1_id is 4
SELECT item_1_id, item_1_name, item_1_price
FROM store
WHERE item_1_id = 4;

-- Create customers table
CREATE TABLE customers AS
SELECT DISTINCT customer_id, customer_phone, cutomer_email
FROM store;

-- Create primary key
ALTER TABLE customer
ADD PRIMARY KEY (customer_id);

-- Create items table
CREATE TABLE items AS
SELECT DISTINCT item_1_id as item_id, item_1_name as name, item_1_price as price
FROM store
UNION
SELECT DISTINCT item_2_id as item_id, item_2_name as name, item_2_price as price
FROM store
WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as item_id, item_3_name as name, item_3_price as price
FROM store
WHERE item_3_id IS NOT NULL;

-- Create primary key
ALTER TABLE items
ADD PRIMARY KEY (item_id);

-- Create orders_items table
CREATE TABLE orders_items AS
SELECT order_id, item_1_id as item_id
FROM store
UNION ALL
SELECT order_id, item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT order_id, item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL;

-- Create table orders
CREATE TABLE orders AS
SELECT DISTINCT order_id, order_date, customer_id
FROM store;

-- Create primary key
ALTER TABLE orders
ADD PRIMARY KEY (order_id);

-- Create foreign key
ALTER TABLE orders
ADD FOREIGN KEY (customer_id)
REFERENCES customer(customer_id);

-- Create foreign key
ALTER TABLE orders_items
ADD FOREIGN KEY (item_id)
REFERENCES items(item_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (order_id)
REFERENCES orders(order_id);

-- QUERIES

-- return the emails of all customers who made an order after July 25, 2019
SELECT customer_email, order_date 
FROM store
WHERE order_date > ‘2019-07-25’
LIMIT 10;

-- return the emails of all customers who made an order after July 25, 2019
SELECT customer_email
FROM customer, orders, items, orders_items
WHERE customer.customer_id = orders.customer_id
AND order_date > ‘2019-07-25’
LIMIT 10;

-- return the number of orders containing each unique item
WITH all_items AS (
  SELECT item_1_id as item_id
  FROM store
  UNION ALL
  SELECT item_2_id as item_id
  FROM store
  WHERE item_2_id IS NOT NULL
  UNION ALL
  SELECT item_3_id as item_id
  FROM store
  WHERE item_3_id IS NOT NULL
)

SELECT item_id, COUNT(*)
FROM all_items
GROUP BY item_id
LIMIT 10;

-- return the number of orders containing each unique item
SELECT item_id, COUNT(order_id)
FROM orders_items
GROUP BY item_id
LIMIT 10;