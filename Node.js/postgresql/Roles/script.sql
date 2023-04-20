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

-- 1
GRANT CREATE, USAGE 
ON SCHEMA marketing TO analyst;

-- 2
GRANT SELECT, INSERT, DELETE ON marketing.prospects TO analyst;

-- 3 
REVOKE DELETE ON marketing.prospects FROM analyst;

-- 4
SET ROLE analyst;

DELETE FROM marketing.prospects 
WHERE id = 2;


-- 1
GRANT SELECT, DELETE, UPDATE, INSERT ON census.economic_survey TO writer;

-- 2
ALTER DEFAULT PRIVILEGES 
IN SCHEMA census 
GRANT SELECT, DELETE, UPDATE, INSERT ON TABLES TO writer;

-- 3
CREATE TABLE census.housing_survey ( 
  area_id int primary key, 
  median_rent int 
);

-- 4
SELECT 
    table_schema,
    table_name,
    privilege_type
FROM information_schema.table_privileges 
WHERE table_schema  = 'census'
AND grantee = 'writer';

-- 1
CREATE ROLE pgdba WITH NOLOGIN SUPERUSER CREATEDB;

-- 2
CREATE ROLE david WITH LOGIN IN ROLE employees, pgdba; 

-- 3
SELECT rolname, rolsuper 
FROM pg_catalog.pg_roles 
WHERE rolname = 'david';

-- 4
SET ROLE david;
 
SELECT * 
FROM cc_user.company_startdates;

-- 1
GRANT SELECT ON projects to manager;

-- 2
GRANT UPDATE (project_name, project_status) 
ON projects to manager;

-- 3
select * 
from information_schema.column_privileges
where grantee = 'manager';

-- 1
CREATE POLICY sales_rls_policy ON accounts FOR DELETE
TO sales USING (salesperson = current_user);

-- 2
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- 3
SET ROLE alice;

-- 4
DELETE FROM accounts WHERE contract_amt < 10000;

SELECT * FROM accounts;


