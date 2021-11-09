--FOCUSING ON SQL, ESPECIALLY ON MSSQL --
-- LEARNING SQL TERMS AND APPLYING IT IN PRACTICE --

-- database in use

-- SELECT * FROM Musteriler -- select all columns from specified tables
-- SELECT adi, soyadi FROM Personeller -- adi, soyadi columns was displayed

CREATE TABLE customers
(
    id int PRIMARY KEY IDENTITY(1,1),
    firstname NVARCHAR(max),
    lastname NVARCHAR(max),
    age int,
)
-- drop table customers

INSERT customers
    (firstname, lastname, age)
VALUES('Wolfang', 'Wongyote', 90)

UPDATE customers Set firstname='Asym', age = 6 where id = 10

USE Northwind
SELECT *
FROM customers
WHERE age > 35
