SELECT * FROM parts LIMIT 10;

CREATE TABLE parts (
    id integer,
    description character varying,
    code character varying,
    manufacturer_id  integer
);

CREATE TABLE locations (
    id integer,
    part_id integer,
    location varchar(3),
    qty integer
);

CREATE TABLE manufacturers (
    id integer PRIMARY KEY,
    name varchar
);

CREATE TABLE reorder_options (
  id integer PRIMARY KEY,
  part_id integer,
  price_usd numeric(8,2),
  quantity integer
);


ALTER TABLE parts
ADD UNIQUE (code);


ALTER TABLE parts
ALTER COlUMN code SET NOT NULL;


ALTER TABLE parts
ALTER COLUMN description SET NOT NULL;


ALTER TABLE reorder_options
ALTER COLUMN price_usd SET NOT NULL;

ALTER TABLE reorder_options
ALTER COLUMN quantity SET NOT NULL;

ALTER TABLE reorder_options
ADD CHECK (
  price_USD > 0
  AND
  quantity > 0
);

ALTER TABLE reorder_options
ADD CHECK (
  price_USD/quantity BETWEEN 0.02 AND 25.00
);

ALTER TABLE parts
ADD PRIMARY KEY (id);

ALTER TABLE reorder_options
ADD FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE;

ALTER TABLE locations
ADD CHECK (
  qty > 0
);

ALTER TABLE locations
ADD UNIQUE (part_id, location);

ALTER TABLE locations
ADD FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE;

ALTER TABLE parts
ADD FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id);