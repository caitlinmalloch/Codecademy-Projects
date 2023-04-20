-- return the total size of the table

SELECT pg_size_pretty(pg_total_relation_size(‘sensors.observations’));

-- returns the size of each of these indexes
-- returns the size of the table’s data, indexes, and the total relation size as three separate columns

SELECT 
  pg_size_pretty(pg_table_size(‘sensors.observations’)) as tbl_size,
  pg_size_pretty(pg_indexes_size(‘sensors.observations’)) as idx_size,
  pg_size_pretty(pg_total_relation_size(‘sensors.observations’)) as total_size;

-- update the value of distance to feet

UPDATE sensors.observations
SET distance = (distance * 3.281)
WHERE TRUE;

-- Check the size of the tables and indexes now

SELECT
  pg_size_pretty(pg_table_size(‘sensors.observations’)) as tbl_size,
  pg_size_pretty(pg_indexes_size(‘sensors.observations’)) as idx_size,
  pg_size_pretty(pg_total_relation_size(‘sensors.observations’)) as total_size;

-- querying the database for this table’s pg_table_size

VACUUM sensors.observations;

SELECT pg_size_pretty(pg_table_size(‘sensors.observations’));

-- add the additional observations to the table

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM ‘./additional_obs_types.csv’ WITH DELIMITER ‘,’ CSV HEADER;

-- Check the table size of sensors.observations now

VACUUM sensors.observations;

SELECT pg_size_pretty(pg_table_size(‘sensors.observations’)) as total_size;

-- Run a VACUUM FULL on this table to return any excess space this table is consuming to the operating system.

VACUUM FULL sensors.observations;

SELECT pg_size_pretty(pg_table_size(‘sensors.observations’)) as total_size;

-- DELETEs all cameras at a location_id greater than 24

DELETE from sensors.observations
WHERE location_id > 24;

-- Check the size of the table’s data

SELECT pg_size_pretty(pg_table_size(‘sensors.observations’)) as total_size;

-- Using TRUNCATE, clear all the values from sensors.observations

TRUNCATE sensors.observations;

-- load the values from the original (10,000 obs.) and supplemental (1,000 obs.) into the table.

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM ‘./original_obs_types.csv’ WITH DELIMITER ‘,’ CSV HEADER;

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM ‘./additional_obs_types.csv’ WITH DELIMITER ‘,’ CSV HEADER;

-- checks the total table, index, and combined size of the table now

SELECT
  pg_size_pretty(pg_table_size(‘sensors.observations’)) as tbl_size,
  pg_size_pretty(pg_indexes_size(‘sensors.observations’)) as idx_size,
  pg_size_pretty(pg_total_relation_size(‘sensors.observations’)) as total_size;