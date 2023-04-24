CREATE TABLE "product" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "desc" text,
  "SKU" varchar,
  "category_id" int,
  "inventory_id" varchar,
  "price" float,
  "discount_id" int,
  "created_at" timestamp,
  "modified_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "product_category" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "desc" text,
  "created_at" timestamp,
  "modified_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "product_inventory" (
  "id" int PRIMARY KEY,
  "quantity" int,
  "created_at" timestamp,
  "modified_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "discount" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "desc" text,
  "discount_percent" float,
  "active" boolean,
  "created_at" timestamp,
  "modified_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "order_details" (
  "id" int PRIMARY KEY,
  "user_id" varchar,
  "total" float,
  "payment_id" int,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "order_items" (
  "id" int PRIMARY KEY,
  "order_id" int,
  "product_id" int,
  "quantity" int,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "user" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "password" text,
  "first_name" varchar,
  "last_name" varchar,
  "telephone" int,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "shopping_session" (
  "id" int PRIMARY KEY,
  "user_id" varchar,
  "total" float,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "cart_item" (
  "id" int PRIMARY KEY,
  "session_id" int,
  "product_id" int,
  "quantity" int,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "payment_details" (
  "id" int PRIMARY KEY,
  "order_id" int,
  "amount" int,
  "provider" varchar,
  "status" varchar,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "user_address" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "address_line1" varchar,
  "address_line2" varchar,
  "city" varchar,
  "postal_code" varchar,
  "country" varchar,
  "telephone" varchar,
  "mobile" varchar
);

CREATE TABLE "user_payment" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "payment_type" varchar,
  "provider" varchar,
  "account_no" int,
  "expiry" date
);

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "product_inventory" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "product_category" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "order_details" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "user" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "order_items" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "shopping_session" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "cart_item" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "payment_details" ("id");
