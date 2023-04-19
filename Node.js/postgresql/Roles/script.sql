-- 1
CREATE ROLE analyst WITH LOGIN NOSUPERUSER; 

-- 2
CREATE ROLE analyst_mgmt WITH CREATEROLE LOGIN NOSUPERUSER;

-- 3
ALTER ROLE analyst_mgmt WITH CREATEDB;

-- 4
SET ROLE analyst_mgmt;
 
CREATE ROLE wilson WITH LOGIN;
 
SELECT * FROM pg_catalog.pg_roles 
ORDER BY rolname;